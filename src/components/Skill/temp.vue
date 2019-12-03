<template>
  <div class="wrapper-skills">
    <div class="workplace" v-for="data in allSkills" :key="data.id">
      <div class="workplace__date">
        <span class="workplace__length">{{data.length}}</span>
        <span class="workplace__months">{{data.months}}</span>
      </div>
      <div class="workplace__description">
        <span class="workplace__position">{{data.position}}</span>
        <span class="workplace__duties">{{data.duties}}</span>
      </div>
    </div>
  </div>
</template>

<script src="./index.js" />

<style lang="scss" scoped>
  @import './styles.scss';
</style>