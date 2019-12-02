<template>
  <div class="information">
    <div class="information-text" v-if="value === 2">You can go!</div>
    <div class="information-text" v-else>Please, wait</div>
    <div class="information-timer">{{calculatedTime}}</div>
  </div>
</template>

<script src="./index.js" />

<style scoped>
  @import './style.css';
</style>
