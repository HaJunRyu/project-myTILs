const mysql = require('mysql2/promise');
const dbconfig = require('../config/database.js');
const pool = mysql.createPool(dbconfig);

exports.getTils = async users_idusers => {
  try {
    const connection = await pool.getConnection(async conn => conn);
    try {
      const [rows] = await connection.query('SELECT * FROM TIL WHERE users_idusers=(?)', [
        users_idusers,
      ]);
      connection.release();
      return rows;
    } catch (err) {
      connection.release();
      return 'Query Error';
    }
  } catch (error) {
    console.error(error);
  }
};

exports.createTil = async ({ user_id, subject, contents, created = Date.now() } = {}) => {
  try {
    const connection = await pool.getConnection(async conn => conn);
    try {
      const [
        rows,
      ] = await connection.query(
        'INSERT INTO TIL(users_idusers, subject, contents, created) values (?, ?, ?, ?)',
        [user_id, subject, contents, created]
      );
      connection.release();
      return rows;
    } catch (err) {
      connection.release();
      return 'Query Error';
    }
  } catch (error) {
    console.error(error);
  }
};
