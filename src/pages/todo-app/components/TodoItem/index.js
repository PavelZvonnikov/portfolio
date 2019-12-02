export default {
  name: "TodoItem",
  props: {
    todo: Object,
    index: Number,
    checkAll: Boolean,
  },
  data() {
    return {
      'id': this.todo.id,
      'title': this.todo.title,
      'completed': this.todo.completed,
      'editing': this.todo.editind,
      'beforeEditCache': '',
    }
  },
  watch: {
    checkAll() {
      this.completed = this.checkAll ? true : this.todo.completed
    }
  },
  directives: {
    focus: {
      inserted: function (el) {
        el.focus()
      }
    }
  },
  methods: {
    remove(index) {
      this.$emit('removedTodo', index)
    },
    editTodo() {
      this.beforeEditCache = this.title
      this.editing = true
    },
    doneEdit() {
      if (this.title.trim() == '') {
        this.title = this.beforeEditCache;
      }
      this.editing = false
      this.$emit('finishedEdit', {
        'index': this.index,
        'todo': {
          'id': this.id,
          'title': this.title,
          'completed': this.completed,
          'editing': this.editing,
        }
      })
    },
    cancelEdit() {
      this.title = this.beforeEditCache;
      this.editing = false;
    },

  },
}
