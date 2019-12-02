import TodoItem from "../TodoItem/temp.vue";

export default {
  name: 'todo-list',
  components: {
    TodoItem,
  },
  data () {
    return {
      newTodo: '',
      idTodo: 3,
      beforeEditCache: '',
      filter: 'all',
      todos: [
        {
          id: 1,
          'title': 'Make Todo App',
          'completed': false,
          'editing': false,
        },
        {
          'id': 2,
          'title': 'Create one more app',
          'completed': false,
          'editing': false,
        },
      ],

    }
  },
  computed: {
    remaining() {
      return this.todos.filter( todo => !todo.completed).length
    },
    anyRemaining() {
      return this.remaining != 0
    },
    todosFiltered() {
      if (this.filter == 'all') {
        return this.todos;
      } else if (this.filter == 'active') {
        return this.todos.filter(todo => !todo.completed)
      } else if (this.filter == 'completed') {
        return this.todos.filter(todo => todo.completed)
      }
      return this.todos
    },
    showClearCompletedButton() {
      return this.todos.filter(todo => todo.completed).length > 0
    }
  },
  methods: {
    addTodo() {
      if (this.newTodo.trim().length == 0) {
        return
      }
      this.todos.push({
        id: this.idTodo,
        title: this.newTodo,
        completed: false,
        editing: false,
      })

      this.newTodo = ''
      this.idTodo++
    },
    remove(index) {
      this.todos.splice(index, 1)
    },
    checkAllTodos() {
      this.todos.forEach((todo) => todo.completed = event.target.checked
      )
    },
    clearCompleted() {
      this.todos = this.todos.filter(todo => !todo.completed)
    },
    finishedEdit(data) {
      this.todos.splice(data.index, 1, data.todo)
    }
  }
}