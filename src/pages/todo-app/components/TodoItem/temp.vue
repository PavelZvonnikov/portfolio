<template>
  <div class="todo-item">
    <div class="todo-item-left">
      <input type="checkbox" v-model="completed" @change="doneEdit">
      <div v-if="!editing" class="todo-item-label" :class="{ completed: completed }"
      @dblclick="editTodo">
        {{title}}
      </div>
      <input v-else class="todo-item-edit" type="text" v-model="title"
      @blur="doneEdit" @keyup.enter="doneEdit" @keyup.esc="cancelEdit"
      v-focus>
    </div>
    <div class="remove-item" @click="remove(index)">
      &times;
    </div>
  </div>
</template>

<script src="./index.js" />

<style lang="scss" scoped>
  @import './styles.scss';
</style>


