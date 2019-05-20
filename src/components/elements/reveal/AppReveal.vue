<template>
  <div>
    <button
      v-if="!revealed"
      @click="revealed = !revealed"
    >
      Click to reveal
    </button>

    <div v-if="revealed">{{ text }}</div>
  </div>
</template>

<script>
export default {
  props: {
    text: {
      type: String,
      required: true
    }
  },
  data: () => ({
    revealed: false
  })
}
</script>
