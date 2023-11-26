const { db } = require('@vercel/postgres');
const {
  invoices,
  customers,
  revenue,
  users,
  slugs,
  counter
} = require('./data.js');

//understand everything above this line

async function seedHits(client) {
    try {
        //create the "hits" table if it doesnt exist
        const createTable = await client.sql`
        CREATE TABLE IF NOT EXISTS hits (
        slug varchar(100),
        hits int
        );
        `;

    console.log(`Created "hits" table`);

    //Insert data into the "hits" table
    //TODO: Everything below this line needs to be fixed

    const insertedData = await client.sql`
        INSERT INTO hits (slug, hits)
        VALUES (${slugs[0].slug}, ${counter[0].hits});
        `;
  
      console.log(`Seeded initial hit`);
  
      return {
        createTable,
        hits: insertedData,
      };

    //Remove when done
    } catch (error) {
      console.error('Error seeding slug:', error);
      throw error;
    }
  }

async function main() {
  const client = await db.connect();

  await seedHits(client);

  await client.end();
}

main().catch((err) => {
  console.error(
    'An error occurred while attempting to seed the database:',
    err,
  );
});
