<template>
  <section class="container">
    <div>
      <logo />
      <h1 class="title">rails-nuxt</h1>
      <div class="pt-3">
        <nuxt-link to="ping" class="btn btn-green">Ping</nuxt-link>
        <a
          href="https://github.com/tdkn/rails-nuxt"
          class="btn btn-grey"
          target="_blank"
        >
          GitHub
        </a>
      </div>
    </div>
  </section>
</template>

<script>
import Logo from '~/components/Logo.vue'

export default {
  components: {
    Logo
  }
}
</script>

<style scoped>
.container {
  @apply min-h-screen flex justify-center items-center text-center mx-auto;
}

.title {
  @apply font-sans block font-bold text-grey-darkest;
  font-size: 100px;
}
</style>
