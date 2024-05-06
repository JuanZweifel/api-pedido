const mysql = require("mysql2")
require("dotenv").config()

class SQLError extends Error {
	constructor(mensaje) {
		super(mensaje)
		this.name = "SQLError"
	}
}

const connection = mysql.createConnection(
	`mysql://${process.env.USER}:${process.env.PASSWORD}@sql-first-integration-apitest.h.aivencloud.com:17527/integration_ferremax?ssl-mode=REQUIRED`
)

async function openConnection(callback) {
	connection.connect((error) => {
		if (error) callback(new SQLError(error))
		console.log("Conexion con MYSQL Establecida")
		callback(null, connection)
	})

}

async function closeConnection() {
	connection.end((error) => {
		if (error) throw new SQLError(error)
		console.log("Conexion con MYSQL cerrada")
	})
}

module.exports = { openConnection, closeConnection, SQLError, connection }
