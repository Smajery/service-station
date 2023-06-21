const {adminPool, driverPool} = require("../db");
const ApiError = require("../error/ApiError");


class TripController {

    async create(req, res, next) {

        const {user_id, car_id, date, destination_address} = req.body
        adminPool.query('INSERT INTO trips( user_id, car_id, date, destination_address) VALUES ($1, $2, $3, $4);',
            [user_id, car_id, date, destination_address], (error, results) => {
                if (error) {
                    return next(ApiError.badRequest(error.message))
                }
                res.json(results.rows)
            })
    }

    async getAll(req, res, next) {

        const {startDate, endDate} = req.query;
        adminPool.query('SELECT * FROM trips_view WHERE date > $1 and date < $2', [startDate, endDate], (error, results) => {
            if (error) {
                return next(ApiError.badRequest(error.message))
            }
            res.json(results.rows)
        })
    }

    async getTripsByDriver(req, res, next) {

        const driver_id = req.user.id
        driverPool.query('SELECT * FROM trips_view WHERE user_id = $1', [driver_id], (error, results) => {
            if (error) {
                return next(ApiError.badRequest(error.message))
            }
            res.json(results.rows)
        })
    }


}

module.exports = new TripController()