const {attendantPool, adminPool, driverPool} = require('../db')
const ApiError = require("../error/ApiError");

class FalController {

    async create(req, res, next) {
        //type: if the fuel, then type = 0, if lubricant then type = 1
        const {name, type} = req.body
        adminPool.query('INSERT INTO fals(name, type) VALUES ($1, $2);',
            [name, type], (error, results) => {
            if (error) {
                return next(ApiError.badRequest(error.message))
            }
            res.json(results.rows)
        })
    }

    async getAll(req, res, next) {
        adminPool.query('SELECT * FROM fals', (error, results) => {
            if (error) {
                return next(ApiError.badRequest(error.message))
            }
            res.json(results.rows)
        })
    }

    async getStatistics(req, res, next) {
        adminPool.query('select * from generate_statistics()', (error, results) => {
            if (error) {
                return next(ApiError.badRequest(error.message))
            }
            res.json(results.rows)
        })
    }

    async getStocks(req, res, next) {
        attendantPool.query('SELECT * FROM fals', (error, results) => {
            if (error) {
                return next(ApiError.badRequest(error.message))
            }
            res.json(results.rows)
        })
    }

    async getConsumption(req, res, next) {
        const {trip_id} = req.params;
        driverPool.query('SELECT * FROM get_trip_consumption($1);',[trip_id], (error, results) => {
            if (error) {
                return next(ApiError.badRequest(error.message))
            }
            res.json(results.rows)
        })
    }

}

module.exports = new FalController()