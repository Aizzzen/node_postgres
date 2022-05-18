// конфигурируем базу данных

// сразу же получаем пулл
const Pool = require("pg").Pool
// с помощью объекта этого класса будем делать запросы к БД
const pool = new Pool({
    user: "postgres",
    password: "1234",
    host: "localhost",
    port: 5432,
    database: "node_postgres"
})

module.exports = pool
