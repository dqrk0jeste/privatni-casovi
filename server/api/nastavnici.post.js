// import { createPool, sql } from '@vercel/postgres'

// export default defineEventHandler(async (event) => {
//   const body = await readBody(event)
//   const db = createPool()
//   try {
//     await sql`
//       CREATE TABLE IF NOT EXISTS nastavnici (
//         id INT PRIMARY KEY AUTO_INCREMENT,
//         ime VARCHAR(255) NOT NULL,
//         prezime VARCHAR(255) NOT NULL,
//         napomena TEXT
//       );
//     `
//     const noviNastavnik = await sql`
//       INSERT INTO nastavnici
//     `
//   } catch (error) {
    
//   }
// })