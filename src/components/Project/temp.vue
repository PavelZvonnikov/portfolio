<template>
  <div class="wrapper-project">
    <div class="project" v-for="(data, index) in allProjects" :key="index">
      <router-link :to="data.path">
        <img class="project__image" :src="data.img" alt="data.path">
      </router-link>
      <span class="project__name">{{data.name}}</span>
    </div>
  </div>
</template>

<script src="./index.js" />

<style lang="scss" scoped>
  @import './styles.scss';
</style>