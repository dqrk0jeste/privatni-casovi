<script setup>
  const props = defineProps(['nameForAccessability'])
  console.log(props.nameForAccessability)
  const area = ref(null)

  const resize = () => {
    console.log(area.offsetHeight, ' ', area.scrollHeight)
    if(area.value.offsetHeight < area.value.scrollHeight) {
      area.value.style.height = (area.value.scrollHeight) + 'px'
    }
  }
</script>

<template>
  <textarea :name="props.nameForAccessability" ref="area" class="resize w-full rounded-lg max-w-[100%] p-2" @input="resize" rows="3"></textarea>
</template>