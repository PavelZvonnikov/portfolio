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

<script>

export default {
name: 'Skill',

computed: {
  allSkills() {
    return this.$store.getters.allSkills
  }
}
}
</script>

<style lang="scss">
.wraper-skills {
    margin-bottom: 80px;
}

.workplace {
  margin-bottom: 60px;
  display: flex;
  justify-content: space-between;
  color: #fff;
  font-family: Arial, sans-serif;
  font-size: 23px;
  line-height: 110%;

  &:last-child {
    margin-bottom: 0;
  }

  &__date {
    display: flex;
    flex-direction: column;
  }

  &__description {
    width: 50.4762%;
    max-width: 424px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
  }

  &__length {
    color: #A9D539;
    margin-bottom: 13px;
  }

  &__position {
    margin-bottom: 15px;
  }

  &__duties {
    color:rgb(122, 122, 122);
    line-height: 130%;
  }
}
</style>

