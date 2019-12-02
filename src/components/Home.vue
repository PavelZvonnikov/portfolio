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

<script>
import store from '../store.js'

import About from './About.vue'
import Header from './Header.vue'
import Skill from './Skill.vue'
import Project from './Project.vue'

export default {
  name: 'home',
  components: {
    About,
    Header,
    Skill,
    Project
  },
  computed: {
  experience() {
    return store.state.headersList.skills
  },
  projectList() {
    return store.state.headersList.tasks
  },
},
}
</script>

<style lang="scss">

.home {
  max-width: 840px;
  margin: 0 auto;
}

.home-wrapper {
  width: 100%;
  height: 100%;
  background-color: #333333;
}

@media screen and (max-width: 860px) {
  .home {
    padding: 0 15px;
  }
}

</style>