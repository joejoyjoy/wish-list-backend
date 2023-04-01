const dotenv = require('dotenv');

if (process.env.NODE_ENV === 'development') {
    dotenv.config({path: '.env.development'})
} else {
    dotenv.config({path: '.env.production'})
}

const ENV = process.env.NODE_ENV || 'development'

const CONFIG = {
    development: {
        app: {
            PORT: process.env.PORT || 4001
        },
    },
    production: {
        app: {
            PORT: process.env.PORT || 4002
        },
    }
}

module.exports = CONFIG[ENV]