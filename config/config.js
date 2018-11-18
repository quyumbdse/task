module.exports ={
  "development1": {
    "username": "qrservice",
    "password": "qrservice",
    "database": "qrservice",
    "host": "127.0.0.1",
    "dialect": "mysql"
  },
  development: {
    dialect: "sqlite",
    storage: "./db.development.sqlite"
  },
  test: {
    dialect: "sqlite",
    storage: "./db.development.sqlite"
  },
  "production": {
    "username": "root",
    "password": null,
    "database": "database_production",
    "host": "127.0.0.1",
    "dialect": "mysql"
  }
}
