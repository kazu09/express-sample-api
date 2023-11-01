import dbConfig from './dbConfig';

export async function fetchData(userId: number) {
  console.info("Start fetch data...")
  let results;
  try {
    // get database connection
    const connection = await dbConfig.getConnection();
    try {
      // get id columns users
      const sql = 'SELECT * FROM users WHERE id = ?';
      [results] = await connection.query(sql, userId);
      console.debug(results);
    } finally {
      // database connecte release
      connection.release();
    }
  } catch (err) {
    console.info("Failed to fetch data.")
    console.error(`database Error : ${err}`);
    throw err;
  }
  return Array.isArray(results) ? results : [];
}