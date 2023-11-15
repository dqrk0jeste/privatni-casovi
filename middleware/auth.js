export default defineNuxtRouteMiddleware(async (to, from) => {
  if(process.client) {
    const response = await $fetch('/api/verify', {
      method: 'GET'
    })
    if(response.code === 200){
      useState('user', () => response.user)
    } else {
      useRouter().push('/admin')
    }
  }
})