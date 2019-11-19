<template>
  <div class="wrapper-project">
    <div class="project" v-for="(data, index) in allProjects" :key="index">
      <router-link :to="data.path">
        <img class="project__image" :src="data.img" alt="data.path">
      </router-link>
      <span class="project__name">{{data.path}}</span>
    </div>
  </div>
</template>

<script>

export default {
name: 'Project',

computed: {
  allProjects() {
    return this.$store.getters.allProjects
  }
}
}
</script>

<style lang="scss" scoped>
.wrapper-project {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
}

.project {
  margin-bottom: 80px;
  font-family: Arial;
  font-size: 24px;
  line-height: 110%;
  display: flex;
  flex-direction: column;
  max-width: 380px;
  color: #fff;

  &__image {
    margin-bottom: 34px;
    border-radius: 20px;
  }

  &__name {
    text-align: center;
  }

}
</style>

