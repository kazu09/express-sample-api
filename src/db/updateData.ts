/**
 * updateData.ts
 * express-sample-api
 *
 * Copyright © 2023年 kazu. All rights reserved.
 */

import dbConfig from './dbConfig';
import { ResultSetHeader } from 'mysql2';

export async function updateData(userId: number, name: string, email: string) {
  console.info(`Start update data userId ${userId}`)
  try {
    // get database connection 
    const connection = await dbConfig.getConnection();
      
    try {
      const sql = 'UPDATE users SET email = ?, name = ? WHERE id = ?';
      const values = [email, name, userId];
      const [results] = await connection.query(sql, values);
      
      // ResultSetHeader assertion
      const header = results as ResultSetHeader;
      console.debug(`Rows affected : ${header.affectedRows}`);
    } finally {
      // database connecte release
      connection.release();
    }
  } catch (err) {
    console.info("Failed to update.")
    console.error(`database Error : ${err}`);
  }
}