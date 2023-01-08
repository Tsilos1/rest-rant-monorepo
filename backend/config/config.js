require('dotenv').config()

module.exports = {
  "development": {
    "username": "postgres",
    "password": "Ufz8vsew",
    "database": "rest-rant-monorepo",
    "host": "127.0.0.1",
    "dialect": "postgres"
  },
  "test": {
    "username": "postgres",
    "password": "Ufz8vsew",
    "database": "rest-rant-monorepo-test",
    "host": "127.0.0.1",
    "dialect": "postgres"
  },
  "production": {
    "username": "postgres",
    "password": "Ufz8vsew",
    "database": "rest-rant-monorepo-production",
    "host": "127.0.0.1",
    "dialect": "postgres"
  }
}
