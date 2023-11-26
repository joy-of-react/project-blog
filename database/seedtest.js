const { db } = require('@vercel/postgres');
const {
  invoices,
  customers,
  revenue,
  users,
  slug,
  counter
} = require('data.js');

async function seedHits(client) {
    try {
        await client.sql`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`;
        //create the "hits" table if it doesnt exist
        const createTable = await client.sql`
        CREATE TABLE IF NOT EXISTS hits (
        slug varchar(100),
        hits int,
        );
        `;

    console.log(`Created "hits" table`);
        }
    catch (error) {
        console.error('Error seeding slug:', error);
        throw error;
    };
}