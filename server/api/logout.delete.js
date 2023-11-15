export default defineEventHandler(async (event) => {
  deleteCookie(event, 'jwt', {
    httpOnly: true
  })
  return
})