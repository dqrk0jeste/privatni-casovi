export default defineEventHandler(async (event) => {
  if(event.context.user) return event.context.user
  return createError({
    statusCode: 403,
    statusMessage: 'not authorized'
  })
})