<template>
  <div class="weather">
      <div class="weather__temp elem">
        <img class="logo" src="../../assets/temp.svg" alt="">
        <p>Температура: <span class="text" :class="{blue: obj.active}">{{obj.temp}} &deg;C</span></p>
      </div>
      <div class="weather__press elem">
        <img class="logo" src="../../assets/pressure.svg" alt="">
        <p>Давление: <span class="text" :class="{blue: obj.active}"> {{obj.pressure}} мм. рт. ст.</span></p>
      </div>
      <div class="weather__sunset elem">
        <img class="logo" src="../../assets/sunset.svg" alt="">
        <p>Заход солнца: <span class="text" :class="{blue: obj.active}"> {{obj.sunset}} </span></p>
      </div>
  </div>
</template>

<script src="./index.js" />

<style lang="scss">
  @import './styles.scss';
</style>