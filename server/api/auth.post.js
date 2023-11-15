import { createPool } from '@vercel/postgres'
import bcrypt from 'bcrypt'
import jsonwebtoken from 'jsonwebtoken'

export default defineEventHandler(async (event) => {
  const db = createPool()
  const body = await readBody(event)
  try {
    const { rows: users } = await db.query(`
      SELECT username, passwordhash FROM nastavnici
      WHERE username = '${body.username}';
      `
    )
    if(users.length === 0) return {
      code: 401,
      message: 'wrong username or password'
    }
    const user = users[0]
    const validPassword = await bcrypt.compare(body.password, user.passwordhash)
      if(validPassword) {
        const token = jsonwebtoken.sign(
          { user: user.username },
          useRuntimeConfig().tokenSecret,
          { expiresIn: '12h' }
        )
        setCookie(event, 'jwt', token, {
          maxAge: 12 * 60 * 60,
          httpOnly: true
        })
        return {
          code: 200,
          message: 'success'
        }
      } else {
        return {
          code: 401,
          message: 'wrong username or password'
        }
      }
  } catch (error) {
    console.log(error.message)
    return createError({
      statusCode: 500,
      statusMessage: 'error'
    })
  }
})