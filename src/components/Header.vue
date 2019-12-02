<template>
  <div class="header">
    <h3 class="header__text">{{value}}</h3>
  </div>
</template>

<script>
export default {
  name: 'Header',
  props: {
    value: String
  }
}
</script>

<style lang="scss">
.header {
  height: 78px;
  margin-bottom: 60px;
  display: flex;
  align-items: center;
  border-bottom: 2px solid #fff;
  box-sizing: border-box;

  &__text {
    font-family: Arial;
    font-size: 36px;
    line-height: 110%;
    color: #fff;
    font-weight: 800;
  }
}

</style>

