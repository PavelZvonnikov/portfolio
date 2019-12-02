<template>
  <div class="container">
    <TodoList />
  </div>
</template>

<script>
import TodoList from "./components/TodoList/temp.vue"

export default {
  name: 'app',
  components: {
    TodoList
  }

}
</script>

<style lang="scss" scoped>

  * {
    box-sizing: border-box;
  }

  .container {
    max-width: 600px;
    margin: 0 auto;
    font-family: 'Avenir', Arial, Helvetica, sans-serif;
    -webkit-font-smoothing: antialiased;
    color: #2c3e50;
    margin-top: 60px;
    font-size: 24px;
  }

  @media screen and (max-width: 600px) {
    .container {
      padding: 0 15px;
    }
  }
</style>
