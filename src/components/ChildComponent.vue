<template>
  <form @submit.prevent="submitForm">
    <input type="text" v-model="name" placeholder="Enter your name">
    <button type="submit">Submit</button>
  </form>
</template>

<script>
export default {
  data() {
    return {
      name: ''
    }
  },
  methods: {
    submitForm() {
      this.$emit('name-submitted', this.name)
      this.name = ''
    }
  }
}
</script>
