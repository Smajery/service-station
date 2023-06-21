const {attendantPool} = require('../db')
const ApiError = require("../error/ApiError");

class CarController {
    async refueling(req, res, next) {
        let {user_id, trip_id, date, fal_list} = req.body
        let refuel_id;
        try {
            const { rows } = await attendantPool.query(
                'INSERT INTO refuelings(user_id, trip_id, date) VALUES ($1, $2, $3) RETURNING id;',
                [user_id, trip_id, date]);

            if (rows.length > 0) {
                refuel_id = rows[0].id;
            }
        } catch (error) {
            return next(ApiError.badRequest(error.message));
        }
        console.log('performed')
        const insertFalQuery =
            'INSERT INTO refueling_fal(refuel_id, price, fal_id, quantity) VALUES ($1, $2, $3, $4);';

        fal_list.forEach((fal) => {
            attendantPool.query(
                insertFalQuery,
                [refuel_id, fal.price, fal.fal_id, fal.quantity],
                (error) => {
                    if (error) {
                        return next(ApiError.badRequest(error.message));
                    }
                }
            );
        });
        res.status(201).json({ refuel_id });
    }

    async topConsumers(req, res, next) {
        attendantPool.query('SELECT * FROM fuel_consumers', (error, results) => {
            if (error) {
                return next(ApiError.badRequest(error.message))
            }
            res.json(results.rows)
        })
    }
}

module.exports = new CarController()