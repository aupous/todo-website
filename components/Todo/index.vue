<template>
  <div class="todo-container">
    <todo-input
      :content="content"
      @input="content = $event"
      @addTodo="addTodo"/>
    <todo-card
      v-for="(todo, id) in list"
      :key="`todo_id${id}`"
      :todo="todo"
      @delete="deleteEl(todo)" />
    <todo-footer
      :count="count"
      @all="show = 1"
      @active="show = 2"
      @completed="show = 3"
      @clearComplete="todos = active" />
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
  data() {
    return {
      content: '',
      todos: [],
      show: 1,
    }
  },
  methods: {
    addTodo() {
      this.todos.push({
        content: this.content,
        active: true
      });
      this.content = '';
    },
    btnActive() {
      console.log('1');
    },
    deleteEl(value) {
      const ind = this.todos.indexOf(value);
      if(ind != -1) this.todos.splice(ind, 1);
    }
  },
  computed: {
    active() {
      return this.todos.filter(todo => todo.active)
    },
    completed() {
      return this.todos.filter(todo => !todo.active)
    },
    count() {
      return this.active.length
    },
    list() {
      if(this.show == 1) return this.todos;
      else if(this.show == 2) return this.active;
      else return this.completed;
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
