export default defineNuxtRouteMiddleware(async (to, from) => {
  if(process.client) {
    try {
      const response = await $fetch('/api/verify', {
        method: 'GET'
      })
      if(response.code === 200){
        useState('user', () => response.user)
      } else {
        useRouter().push('/admin')
      }
    } catch(error) {
      useRouter().push('/admin')
    }
  }
})