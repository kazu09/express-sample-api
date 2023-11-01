/**
 * dbConfig.ts
 * express-sample-api
 *
 * Copyright © 2023年 kazu. All rights reserved.
 */

import mysql from 'mysql2/promise';

// Database connection settings
const dbConfig = mysql.createPool({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.DB_NAME
});

export default dbConfig;