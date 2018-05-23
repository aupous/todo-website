<template>
  <div class="todo-container">
    <todo-input
      @addTodo="$store.commit('addTodo')"/>
    <todo-card
      v-for="(todo, id) in $store.getters.list"
      :key="`todo_id${id}`"
      :todo="todo"
      @delete="deleteEl(todo)" />
    <todo-footer
      @all="$store.commit('all')"
      @active="$store.commit('active')"
      @completed="$store.commit('complete')"
      @clearComplete="$store.dispatch('clearComplete')" />
  </div>
</template>
<script>
import TodoInput from '../common/TodoInput'
import TodoCard from '../common/TodoCard'
import TodoFooter from '../common/TodoFooter'

export default {
  components: {
    TodoInput,
    TodoCard,
    TodoFooter,
  },
  methods: {
    deleteEl(value) {
      const ind = this.$store.todos.indexOf(value);
      if(ind != -1) this.$store.todos.splice(ind, 1);
    }
  }
}
</script>
<style lang="stylus">
  .todo-container
    width 100%
    font 14px 'Helvetica Neue', Helvetica, Arial, sans-serif
    background #f5f5f5
    background-size cover
    display flex
    flex-direction column
    align-items center
    justify-content center
    padding 40px 0px
</style>
