import dbConfig from './dbConfig';

export async function fetchAllData() {
  console.info("Start fetch data...")
  let results;
  try {
    // get database connection
    const connection = await dbConfig.getConnection();
    try {
      // get all columns users
      const sql = 'SELECT * FROM users';
      [results] = await connection.query(sql);
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