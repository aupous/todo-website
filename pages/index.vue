<template>
  <section class="container">
    <app-logo />
    <todo />
  </section>
</template>
<script>
import Todo from '../components/Todo'
import AppLogo from '../components/AppLogo'

export default {
  components: {
    Todo,
    AppLogo,
  },
}
</script>
<style lang="stylus">
</style>

