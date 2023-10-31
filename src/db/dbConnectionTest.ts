import dbConfig from './dbConfig';

export async function connectionTest() {
  console.log(`Start database connection test...`)
  try {
    const connection = await dbConfig.getConnection();
    
    const [rows] = await connection.query('SELECT 1');
    console.log(`Connection database successful : ${rows}`);

    connection.release();
  } catch (error) {
    console.error(`Connection database failed : ${error}`);
  }
}