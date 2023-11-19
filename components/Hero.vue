<script setup>
  const zakaziteCas = useState('zakazite-cas')
  onMounted(() => {
    const iconsLeft = document.querySelectorAll('.icon-left')
    const iconsRight = document.querySelectorAll('.icon-right')
    const background = document.querySelector('.background')
    document.addEventListener('scroll', () => {
      const amount = -background.getBoundingClientRect().top
      iconsLeft.forEach((icon) => {
        icon.style.translate = `-${amount * icon.dataset.factor}px`
      })
      iconsRight.forEach((icon) => {
        icon.style.translate = `${amount * icon.dataset.factor}px`
      })
    })
  })
</script>

<template>
  <section id="hero" class="relative">
    <div class="background relative w-full bg-fixed blur-[1px]"></div>
    <div class="absolute top-0 left-0 w-full h-screen">
      <img src="../assets/images/compass.svg" class="icon-right absolute rotate-[20deg] bottom-[50px] right-[-120px] w-[300px] md:bottom-[100px] md:w-[500px] z-[1]" data-factor="0.4">
      <img src="../assets/images/calculator.svg" class="icon-right absolute bottom-[-50px] right-[-70px] w-[220px] md:w-[400px] z-[2]" data-factor="0.7">
      <img src="../assets/images/ruler.svg" class="icon-left absolute rotate-[80deg] bottom-[-30px]  left-[-30px] w-[300px] md:w-[500px] z-[3]" data-factor="0.8">
      <img src="../assets/images/pencil.svg" class="icon-left absolute -rotate-[110deg] bottom-[50px] left-[-100px] w-[250px] md:w-[350px] z-[4]" data-factor="0.2">
    </div>
    <div class="title absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-blue-500 rounded-[3rem] shadow-xl border-0 px-6 py-10 lg:p-20 z-[0]">
      <h1 class="text-white text-center text-6xl font-bold lg:whitespace-nowrap">ПРИВАТНИ ЧАСОВИ</h1>
      <h3 @click="zakaziteCas.scrollIntoView({ behavior: 'smooth' })" class="text-center text-6xl font-bold lg:whitespace-nowrap text-yellow-300 underline-offset-8 cursor-pointer hover:underline">закажите одмах</h3>
    </div>
  </section>
</template>

<style scoped>
  .background {
    background-image: url('../assets/images/hero_image.jpg');
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    height: 100lvh;
  }

  h1 {
    -webkit-text-stroke: 2px black;
  }

  * {
    -moz-user-select: none;
    -khtml-user-select: none;
    -webkit-user-select: none;
    -o-user-select: none;
    user-select: none;
  }
</style>


