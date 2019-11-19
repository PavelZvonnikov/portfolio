<template>
  <div class="about">
    <div class="avatar">
      <img src="../assets/images/avatar.jpg" alt="Photo">
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

<script>
  export default {
    name: 'About',

    computed: {
      allContacts() {
        return this.$store.getters.allContacts
      }
    }
  }
</script>

<style lang="scss">
.about {
  display: flex;
  max-width: 840px;
  margin-bottom: 120px;
  padding-top: 90px;
  font-family: Arial, sans-serif;
  line-height: 110%;
  color: #fff;
  background-color: #333333;
}

.avatar {
  width: 142px;
  height: 142px;
  margin-right: 50px;
  border-radius: 50%;
  overflow: hidden;
}

.info__name {
  margin-bottom: 16px;
  font-weight: 800;
  font-size: 42px;
  line-height: 110%;
}

.info__position {
  margin-bottom: 55px;
  font-size: 26px;
  opacity: 0.6;
}

.info__contacts {
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
}

.info__communication {
  margin-bottom: 26px;
  display: flex;
  align-items: center;
  font-size: 23px;

  &-icon {
    width: 26px;
    height: 26px;
    margin-right: 20px;
  }
}

</style>
