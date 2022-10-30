var pool = require('./bd');
var md5 = require('md5');

async function getUserByUsernameAndPassword(use, password) {
    try{
        var query = "select - from usuarios where usuario = ? and passwors = ? limit 1";
        var row = await pool.query(query, [user, md5(password)]);
        return rows[0];
      } catch (error) {
        throw(error);
      }
}

module.exports = {getUserByUsernameAndPassword}