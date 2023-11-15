import jsonwebtoken from 'jsonwebtoken'

export default defineEventHandler(async (event) => {
  const token = getCookie(event, 'jwt')
  if(!token) return {
    code: 403,
    message: 'not authorized'
  }
  let response
  jsonwebtoken.verify(
    token,
    useRuntimeConfig().tokenSecret,
    async (error, decoded) => {
      if (error) {
        response = {
          code: 403,
          message: 'not authorized'
        }
      }
      response = {
        code: 200,
        user: decoded.user
      }
    }
  )
  return response
})