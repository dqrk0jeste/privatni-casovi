import { sql } from '@vercel/postgres'

export default defineEventHandler(async (event) => {
  try {
    const body = await readBody(event)
    sql`
      DELETE FROM prijave
      WHERE id = ${body.id};
    `
    return {
      code: 200,
      message: 'deleted successfully'
    }
  } catch (error) {
    console.log(error)
    return createError({
      statusCode: 500,
      statusMessage: 'error'
    })
  }
})