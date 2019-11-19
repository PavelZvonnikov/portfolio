<template>
  <div class="wrapper">
    <div class="app">
      <Info :value="activeColor" :timer="timeToChange" />
      <div class="traffic-light">
        <div class="red-off color">
          <router-view v-if="activeColor === 0" :animate="timeToChange < 2" :activeColor="activeColor" />
        </div>
        <div class="yellow-off color">
          <router-view v-if="activeColor === 1 || activeColor === 3" :animate="timeToChange < 2" 
          :activeColor="activeColor" />
        </div>
        <div class="green-off color">
          <router-view v-if="activeColor === 2" :animate="timeToChange < 2"
          :activeColor="activeColor" />
        </div>
      </div>
    </div>  
  </div>    
</template>

<script src="./index.js" />

<style>
  @import './style.css';
</style>
