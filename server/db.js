const Pool = require("pg").Pool


const adminPool = new Pool({
    user: process.env.POSTGRES_USER_ADMIN,
    password: process.env.POSTGRES_PASSWORD_ADMIN,
    host: process.env.POSTGRES_HOST,
    port: process.env.POSTGRES_PORT,
    database: process.env.POSTGRES_DATABASE
});

const managerPool = new Pool({
    user: process.env.POSTGRES_USER_MANAGER,
    password: process.env.POSTGRES_PASSWORD_MANAGER,
    host: process.env.POSTGRES_HOST,
    port: process.env.POSTGRES_PORT,
    database: process.env.POSTGRES_DATABASE
});

const attendantPool = new Pool({
    user: process.env.POSTGRES_USER_ATTENDANT,
    password: process.env.POSTGRES_PASSWORD_ATTENDANT,
    host: process.env.POSTGRES_HOST,
    port: process.env.POSTGRES_PORT,
    database: process.env.POSTGRES_DATABASE
});

const driverPool = new Pool({
    user: process.env.POSTGRES_USER_DRIVER,
    password: process.env.POSTGRES_PASSWORD_DRIVER,
    host: process.env.POSTGRES_HOST,
    port: process.env.POSTGRES_PORT,
    database: process.env.POSTGRES_DATABASE
});

const authPool = new Pool({
    user: process.env.POSTGRES_USER_AUTH,
    password: process.env.POSTGRES_PASSWORD_AUTH,
    host: process.env.POSTGRES_HOST,
    port: process.env.POSTGRES_PORT,
    database: process.env.POSTGRES_DATABASE
});



module.exports = {
    adminPool,
    attendantPool,
    managerPool,
    driverPool,
    authPool
}


