<template>
  <div>
    <input type="text" class="todo-input" placeholder="What needs to be done"
    v-model="newTodo" @keyup.enter="addTodo">
    <transition-group name="fade" enter-active-class="animated fadeInUp"
    leave-active-class="animated fadeOutDown">
    <TodoItem v-for="(todo, index) in todosFiltered" :key="todo.id"
    :todo="todo" :index="index" :checkAll="!anyRemaining"
    @removedTodo="remove" @finishedEdit="finishedEdit" />
    </transition-group>
    <div class="extra-container">
      <div><label><input type="checkbox" :checked="!anyRemaining"
      @change="checkAllTodos"> Check All </label></div>
        <div> {{ remaining }} items left </div>
    </div>
    <div class="extra-container">
      <div>
        <button class="button" :class="{ active: filter == 'all'}"
        @click="filter = 'all'">All</button>
        <button class="button" :class="{ active: filter == 'active'}"
        @click="filter = 'active'">Active</button>
        <button class="button" :class="{ active: filter == 'completed'}"
        @click="filter = 'completed'">Completed</button>
      </div>
      <div>
        <transition name="fade">
        <button class="button" v-if="showClearCompletedButton"
        @click="clearCompleted">Clear completed</button>
        </transition>
      </div>
    </div>
  </div>
</template>

<script src="./index.js" />

<style lang="scss" scoped>
  @import './styles.scss';
</style>
