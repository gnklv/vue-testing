<template>
  <div
    class="tag"
    :class="{
      'tag--dark': dark
    }"
  >
    {{ text }}
  </div>
</template>

<script>
export default {
  props: {
    text: {
      type: String,
      required: true
    },
    dark: {
      type: Boolean,
      default: false
    }
  }
};
</script>
