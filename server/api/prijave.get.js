import { createPool } from '@vercel/postgres'

export default defineEventHandler(async (event) => {
  const user = useVerify(event)
  console.log(user)
  const db = createPool()
  try {
    
    const { rows: prijave } = await db.query(`
      SELECT * FROM prijave
      WHERE id_nastavnika = ${userThatRequested}
      `)
    return predmeti
  } catch (error) {
    return createError({
      statusCode: 500,
      statusMessage: 'error'
    })
  }
})