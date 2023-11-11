<script setup>
  const zakaziteCas = ref(null)
  const usluge = ref(null)

  onMounted(() => {
    if(useState('zakazite-cas')) {
      const temp = useState('zakazite-cas')
      temp.value = zakaziteCas.value
    } else {
      useState('zakazite-cas', () => zakaziteCas.value)
    }
    if(useState('usluge')) {
      const temp = useState('usluge')
      temp.value = usluge.value
    } else {
      useState('usluge', () => usluge.value)
    }
  })
</script>

<template>
  <Hero />
  <div ref="zakaziteCas">
    <ZakaziteCas />
  </div>
  <div ref="usluge">
    <WhyUs />
  </div>
</template>


