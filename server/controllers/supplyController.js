const {managerPool} = require("../db");
const ApiError = require("../error/ApiError");

class SupplyController {

    async createSupplier(req, res, next) {
        const {name, phone, account} = req.body
        managerPool.query('INSERT INTO supplier(name, phone, account) VALUES ($1, $2, $3);',
            [name, phone, account], (error, results) => {
                if (error) {
                    return next(ApiError.badRequest(error.message))
                }
                res.json(results.rows)
            })
    }

    async createReceipts(req, res, next) {
        const {supplier_id, user_id, supply_date, station_id, invoice_id} = req.body
        managerPool.query('INSERT INTO receipts(supplier_id, user_id, supply_date, station_id, invoice_id) VALUES ($1, $2, $3, $4, $5);',
            [supplier_id, user_id, supply_date, station_id, invoice_id], (error, results) => {
                if (error) {
                    return next(ApiError.badRequest(error.message))
                }
                res.json(results.rows)
            })
    }

    async getReceipts(req, res, next) {
        managerPool.query('SELECT * FROM receipts_view',
             (error, results) => {
                if (error) {
                    return next(ApiError.badRequest(error.message))
                }
                res.json(results.rows)
            })
    }

    async getRankSuppliers(req, res, next) {
        managerPool.query('SELECT * FROM suppliers_rank_view',
             (error, results) => {
                if (error) {
                    return next(ApiError.badRequest(error.message))
                }
                res.json(results.rows)
            })
    }



}

module.exports = new SupplyController()