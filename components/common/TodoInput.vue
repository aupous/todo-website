<template>
  <div class="ti-container">
    <h1 class="header-text">todos</h1>
    <input
      autofocus="autofocus"
      autocomplete="off"
      placeholder="What needs to be done?"
      class="todo-input"
      :value="content"
      @input="$emit('input', $event.target.value)"
      @keyup.enter="$emit('addTodo')" />
  </div>
</template>
<script>
export default {
  props: {
    content: {
      type: String,
      required: true,
    },
  },
}
</script>
<style lang="stylus">
  .ti-container
    text-align center
    width 40%
    min-width 300px
  .header-text
    color rgba(175, 47, 47, 0.15)
    font-size 100px
    font-weight 100
  .todo-input
    padding 16px 16px 16px 60px
    font-size 24px
    line-height 1.4em
    width 100%
  .todo-input::-webkit-input-placeholder
    font-style italic
    color #f5f5f5
    font-weight 300
  .todo-input:focus {
    outline 0
  }
</style>

