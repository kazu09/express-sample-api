import dbConfig from './dbConfig';

export async function fetchData() {
  console.info("Start fetch data...")
  try {
    // get database connection
    const connection = await dbConfig.getConnection();
    try {
      // get all columns users
      const sql = 'SELECT * FROM users'
      // get id columns users
      // const sql = 'SELECT * FROM users WHERE id = ?';
      const [results, fields] = await connection.query(sql);
      console.debug(results);
    } finally {
      // database connecte release
      connection.release();
    }
  } catch (err) {
    console.info("Failed to fetch data.")
    console.error(`database Error : ${err}`);
  }
}