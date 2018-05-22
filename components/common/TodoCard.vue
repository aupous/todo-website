<template>
  <div class="td-card">
    <button class="td-card-button" @click="todo.active = !todo.active">
      <div v-show="!todo.active">x</div>
    </button>
    <div class="td-card-content">{{ todo.content }}</div>
    <div class="td-card-delete">
      <button class="td-card-del-btn">x</button>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    todo: {
      type: Object,
      required: true,
    },
  },
}
</script>
<style lang="stylus">
  .td-card
    display flex
    flex-direction row
    width 40%
    align-items center
  .td-card-button
    width 20px
    height 20px
    border-radius 50%
    background inherit
  .td-card-content
    width 70%
    padding 10px 20px
  .td-card-delete
    width 15%
    border 0
</style>
