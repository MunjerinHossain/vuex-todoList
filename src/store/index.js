import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    todos: [
      {
        id: 1,
        title: 'One'
      },
      {
        id: 1,
        title: 'Two'
      }
    ]
  },
  getters: {
    allTodos:(state) => state.todos,
  },
  actions: {
    addTodo({ commit }, todo) {
      commit("addTodo", todo);
    }
  },
  mutations: {
    add_todo(state, todo) {
      state.todos.push(todo);
      console.log(state.todos);
    }
  },
  modules: {
  }
})
