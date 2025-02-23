import pkg from "pg";
const { Client } = pkg;

async function setupDatabase() {
  const client = new Client({
    host: "localhost",
    user: "jacobmaynard",
    password: "dumbInfinity42$",
    database: "postgres", // Connect to the default 'postgres' database to create a new one
  });

  await client.connect();

  // Create the new database
  await client.query("CREATE DATABASE vst_rating_db");
  await client.end();

  // Connect to the new database to create tables
  const newClient = new Client({
    host: "localhost",
    user: "jacobmaynard",
    password: "dumbInfinity42$",
    database: "vst_rating_db",
  });

  await newClient.connect();

  // Create a new table
  await newClient.query(`
    CREATE TABLE your_table (
      id SERIAL PRIMARY KEY,
      column_name VARCHAR(255)
    )
  `);

  // Insert some sample data
  await newClient.query(`
    INSERT INTO your_table (column_name) VALUES ('Sample Data 1'), ('Sample Data 2')
  `);

  await newClient.end();
  console.log("Database setup complete");
}

setupDatabase().catch(console.error);
