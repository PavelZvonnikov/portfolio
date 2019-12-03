<template>
  <div class="home-wrapper">
    <div class="home">
      <About/>
      <div class="wrapper-experience">
        <Header :value="experience" />
        <Skill />
        <div class="wrapper-projects">
          <Header :value="projectList" />
          <Project />
        </div>
      </div>
    </div>
  </div>
</template>

<script src="./index.js" />

<style lang="scss">
  @import './styles.scss';
</style>