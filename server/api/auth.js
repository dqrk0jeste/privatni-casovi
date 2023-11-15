export default defineEventHandler(async () => {
  const db = createPool()
  try {
    const { rows: user } = await db.query(`
      SELECT username, password_hash FROM nastavnici
      WHERE username = ${body.username}
      `
    )
    if(!user) return {
      code: 401,
      message: 'wrong username or password'
    }
    
    return predmeti
  } catch (error) {
    return createError({
      statusCode: 500,
      statusMessage: 'error'
    })
  }
})