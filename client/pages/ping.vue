<template>
  <section class="container">
    <div>
      <code>{{ ping }}</code>
      <div class="pt-5">
        <nuxt-link to="/" class="btn btn-grey">Home</nuxt-link>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'Ping',
  async asyncData({ $axios }) {
    const ping = await $axios.$get('ping')
    return { ping }
  }
}
</script>

<style scoped>
.container {
  @apply min-h-screen flex justify-center items-center text-center mx-auto;
}
</style>
