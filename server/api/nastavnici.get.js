// import { createPool, sql } from '@vercel/postgres'

// export default defineEventHandler(async () => {
//   const db = createPool()
//   try {
//     const { rows: users } = await db.query('SELECT * FROM users')
//     return {
//       users: users,
//       duration: duration,
//     }
//   } catch (error) {
//     if (error?.message === `relation "users" does not exist`) {
//       console.log(
//         'Table does not exist, creating and seeding it with dummy data now...'
//       )
//       await seed()
//       const { rows: users } = await db.query('SELECT * FROM users')
//       const duration = Date.now() - startTime
//       return {
//         users: users,
//         duration: duration,
//       }
//     }
//   }
// })