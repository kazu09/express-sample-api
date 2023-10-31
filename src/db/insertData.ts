import dbConfig from './dbConfig';
import { ResultSetHeader } from 'mysql2';

// データを挿入する非同期関数
export async function insertData(name: string, email: string) {
  console.info("Start insert data")
  try {
    // get database connection
    const connection = await dbConfig.getConnection();

    try {
      const sql = 'INSERT INTO users (name, email) VALUES (?, ?)';
      const values = [name, email];

      const [results] = await connection.query(sql, values);

      // ResultSetHeader assertion
      const header = results as ResultSetHeader;
      console.debug(`Data inserted : ${header.insertId}`);
    } finally {
      // database connecte release
      connection.release();
    }
  } catch (err) {
    console.info("Failed to insert data.")
    console.error(`database Error : ${err}`);
  }
}





