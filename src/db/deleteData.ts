/**
 * deleteData.ts
 * express-sample-api
 *
 * Copyright © 2023年 kazu. All rights reserved.
 */

import dbConfig from './dbConfig';
import { ResultSetHeader } from 'mysql2';

export async function deleteData(userId: number) {
  console.info(`Start Delete data userId ${userId}`)
  try {
    // get database connection 
    const connection = await dbConfig.getConnection();
      
    try {
      const sql = 'DELETE FROM users WHERE id = ?';
      const [results] = await connection.query(sql, [userId]);
      
      // ResultSetHeader assertion
      const header = results as ResultSetHeader;
      console.debug(`Rows affected : ${header.affectedRows}`);
    } finally {
      // database connecte release
      connection.release();
    }
  } catch (err) {
    console.info("Failed to delete.")
    console.error(`database Error : ${err}`);
  }
}