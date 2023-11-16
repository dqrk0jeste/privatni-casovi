export default defineEventHandler(async (event) => {
  if(event.context.user) return event.context.user.username
  return createError({
    statusCode: 403,
    statusMessage: 'not authorized'
  })
})