const { connect } = require('mongoose');
require('dotenv').config();

const { MONGO_DB_URL } = process.env;

const connection = connect(MONGO_DB_URL);

module.exports = connection;
