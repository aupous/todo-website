import Vuex from 'vuex'

const store = () => {
  return new Vuex.Store({
    state: {
      count: 0,
      todos: [],
      content: '',
      show: 1,
    },
    getters: {
      count: state => state.todos.length,
      active: state => state.todos.filter(todo => todo.active),
      complete: state => state.todos.filter(todo => !todo.active),
      list(state, getters) {
        if(state.show == 1) return state.todos;
        else if(state.show == 2) return getters.active
        else return getters.complete
      }
    },
    mutations: {
      increment: state => state.count++,
      decrement: state => state.count--,
      addTodo(state) {
        state.todos.push({
          content: state.content,
          active: true,
        })
        state.content = ''
      },
      all: state => state.show = 1,
      active: state => state.show = 2,
      complete: state => state.show = 3,
    },
    actions: {
      clearComplete(context) {
        context.state.todos = context.getters.active
      },
    }
  })
}
export default store;
