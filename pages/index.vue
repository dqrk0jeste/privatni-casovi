<script setup>
  const zakaziteCasInIndex = ref(null)

  onMounted(() => {
    useState('zakazite-cas-in-index', () => zakaziteCasInIndex.value)
  })
</script>

<template>
  <Hero />
  <div ref="zakaziteCasInIndex">
    <ZakaziteCas />
  </div>
</template>


