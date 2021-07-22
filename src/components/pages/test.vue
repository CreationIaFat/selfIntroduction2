<template>
    <h1>test</h1>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
export default defineComponent({
  name: 'test',
  props: {
    msg: {
      type: String,
      required: true
    }
  },
})
</script>