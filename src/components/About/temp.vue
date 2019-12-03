<template>
  <div class="about">
    <div class="avatar">
      <img class="avatar__image" src="../../assets/images/avatar.jpg" alt="Photo">
    </div>
    <div class="info">
      <p class="info__name">Pavel Zvonnikov</p>
      <p class="info__position">Junior Frontend developer</p>
      <div class="info__contacts">
        <div
          v-for="(data, index) in allContacts"
          :key="index"
          class="info__communication"
        >
          <img
            :src="data.img"
            class="info__communication-icon"
            alt="#"
          >
          <span class="info__communication-name">{{data.text}}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script src="./index.js" />

<style lang="scss" scoped>
  @import './styles.scss';
</style>