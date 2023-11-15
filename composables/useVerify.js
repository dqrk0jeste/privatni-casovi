import jsonwebtoken from 'jsonwebtoken'

export default function(event) {
  const token = getCookie(event, 'jwt')
  if(!token) return {
    code: 403,
    message: 'not authorized'
  }
  let user
  jsonwebtoken.verify(
    token,
    useRuntimeConfig().tokenSecret,
    async (error, decoded) => {
      if (error) {
        user = null
      } else {
        user = decoded.user
      }
    }
  )
  return user
}