const ApiError = require('../error/ApiError')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const {authPool, adminPool} = require("../db");

const generateJwt = (id, email, role) => {
    return jwt.sign(
        {id, email, role},
        process.env.SECRET_KEY,
        {expiresIn: '24h'}
    )
}

class UserController {

    async updateRole(req, res, next) {
        let { email, role} = req.body

        adminPool.query('UPDATE users SET role = $1 WHERE email = $2',
            [role, email], (error, results) => {
                if (error) {
                    return next(ApiError.badRequest(error.message))
                }
                res.json(results.rows)
            })
    }

    async getAll(req, res, next) {

        adminPool.query('SELECT * FROM users',
        (error, results) => {
                if (error) {
                    return next(ApiError.badRequest(error.message))
                }
                res.json(results.rows)
            })
    }

    async registration(req, res, next) {

        try {
            const { email, password } = req.body;
            if (!email || !password) {
                return next(ApiError.badRequest('Incorrect email or password'));
            }

            const client = await authPool.connect();

            try {

                const query = 'SELECT * FROM users WHERE email = $1';
                const values = [email];
                const result = await client.query(query, values);

                if (result.rows.length > 0) {
                    return next(ApiError.badRequest('User with such email already exists'));
                }

                // Hash the password
                const hashPassword = await bcrypt.hash(password, 5);

                // Create a new user
                const insertQuery =
                    'INSERT INTO users (email, password) VALUES ($1, $2) RETURNING id, role';
                const insertValues = [email, hashPassword];
                const insertResult = await client.query(insertQuery, insertValues);
                const userId = insertResult.rows[0].id;
                const role = insertResult.rows[0].role;

                // Generate JWT token
                const token = generateJwt(userId, email, role);

                return res.json({ token });
            } finally {
                client.release();
            }
        } catch (e) {
            next(ApiError.badRequest(e.message));
        }

    }

    async login(req, res, next) {
        try {
            const { email, password } = req.body;

            const client = await authPool.connect();

            try {
                const query = 'SELECT * FROM users WHERE email = $1';
                const values = [email];
                const result = await client.query(query, values);
                const user = result.rows[0];

                if (!user) {
                    return next(ApiError.internal('User with such email was not found'));
                }

                const comparePassword = await bcrypt.compare(password, user.password);
                if (!comparePassword) {
                    return next(ApiError.internal('Incorrect password'));
                }

                const token = generateJwt(user.id, email, user.role);

                res.json({ token });
            } finally {
                client.release();
            }
        } catch (e) {
            next(ApiError.badRequest(e.message));
        }

    }

    async check(req, res, next) {
        try {
            const token = generateJwt(req.user.id, req.user.email, req.user.role)
            return res.json({token})
        } catch (e) {
            next(ApiError.badRequest(e.message))
        }
    }
}

module.exports = new UserController()