<script setup>
  const props = defineProps(['idForAccessability'])
  const emit = defineEmits(['input'])

  const area = ref(null)
  const text = ref('')

  const handleInput = () => {
    if(area.value.offsetHeight < area.value.scrollHeight) {
      area.value.style.height = (area.value.scrollHeight) + 'px'
    }
    const data = text.value
    emit('input', data)
  }
</script>

<template>
  <textarea v-model="text" :id="props.idForAccessability" ref="area" class="resize w-full rounded-lg max-w-[100%] p-2" @input="handleInput" rows="3"></textarea>
</template>