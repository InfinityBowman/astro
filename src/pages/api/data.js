import pkg from "pg";
const { Client } = pkg;

export async function GET({ request }) {
  try {
    const client = new Client({
      host: "172.21.219.188",
      user: "jacobmaynard",
      password: "dumbInfinity42$",
      database: "vst_rating_db",
    });

    await client.connect();
    const res = await client.query("SELECT * FROM your_table");
    await client.end();

    return new Response(JSON.stringify(res.rows), {
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    console.error("Database query error:", error);
    return new Response(JSON.stringify({ error: "Internal Server Error" }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }
}
