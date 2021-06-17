<template>
  <div class="about">
    <h1>This is an about page</h1>
    <p >This is an about page</p>
  </div>
</template>





<style lang="scss" scoped>
  @import '@/assets/scss/_mixins.scss' ;
  @import "@/assets/scss/_variable.scss";



  div {
    h1 {
      color: red;
      @include respond(phone) {
        color: blue;
      }
      &:hover {
        color: $color-primary;
        }

    }
    p {
      // font-weight: Bold;
      font-size: 20px;
    }
  }
</style>
