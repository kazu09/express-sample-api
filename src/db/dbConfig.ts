import mysql from 'mysql2/promise';

// データベース接続設定
const dbConfig = mysql.createPool({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.DB_NAME
});

export default dbConfig;