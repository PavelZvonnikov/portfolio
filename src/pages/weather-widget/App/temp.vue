<template>
  <div class="wrapper-weather">
    <div class="main">
      <div class="description">
        <Info />
      </div>
      <div class="form">
        <div class="form__center">
          <Form
            :weatherMethod="gettingWeather"
            :inputChange="inputChange"
            :remove="remove"
            :city="city"
          />
          <Weather :obj="obj" />
        </div>
      </div>
    </div>
  </div>
</template>lang="scss"

<script src="./index.js" />

<style lang="scss">
  @import './styles.scss';
</style>