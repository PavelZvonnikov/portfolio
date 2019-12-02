<template>
  <div class="form-wrapper">
    <div class="form-wrapper__input">
      <input autocomplete="off" type="text" name="city" class="city-name" placeholder="Название города"
      :value="city" @input="inputChange" @keyup.enter="weatherMethod">
      <div class="form-wrapper__remove-item" v-if="city" @click="remove">
        &times;
      </div>
    </div>
    <button class="submit" type="button" @click="weatherMethod" >Узнать</button>
  </div>
</template>

<script src="./index.js" />

<style lang="scss">
  @import './styles.scss';
</style>