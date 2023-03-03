import mysql from 'serverless-mysql';

const db = mysql({
  config: {
    host: process.env.MYSQL_HOST,
    port: process.env.MYSQL_PORT,
    database: process.env.MYSQL_DATABASE,
    user: process.env.MYSQL_USER,
    password: process.env.MYSQL_PASSWORD,
  },
});
export default async function excuteQuery({ query, values }) {
  console.log('Inside execute', query);
  console.log('Inside execute', values);

  try {
    await db.connect();
    console.log('DB connected');
    const results = await db.query(query, values);
    console.log('Query executed');
    await db.end();
    console.log('DB disconnected');
    return results;
  } catch (error) {
    console.log(error);
    return { error };
  }
}
