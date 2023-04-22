<script>
export default {
  inject: ['message']
}
</script>

<template>
  <p>
    Message to grand child: {{ message }}
  </p>
</template>