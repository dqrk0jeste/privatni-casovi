import { createPool } from '@vercel/postgres'

export default defineEventHandler(async () => {
  const db = createPool()
  try {
    const { rows: predmeti } = await db.query('SELECT id, ime FROM predmeti')
    return predmeti
  } catch (error) {
    return createError({
      statusCode: 500,
      statusMessage: 'error'
    })
  }
})