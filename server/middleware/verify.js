import jsonwebtoken from 'jsonwebtoken'

export default defineEventHandler((event) => {
  const urls = [
    '/admin/dashboard',
    '/api/prijave',
    '/api/current',
    '/api/delete',
    '/api/take'
  ]
  if(!urls.includes(getRequestURL(event).pathname)) return
  const token = getCookie(event, 'jwt')
    if(!token) throw createError({
      statusCode: 403,
      statusMessage: 'not authorized'
    })
    jsonwebtoken.verify(
      token,
      useRuntimeConfig().tokenSecret,
      async (error, decoded) => {
        if (error) {
          throw createError({
            statusCode: 403,
            statusMessage: 'not authorized'
          })
        } else {
          event.context.user = {
            username: decoded.username,
            id: decoded.id
          }
        }
      })
})
