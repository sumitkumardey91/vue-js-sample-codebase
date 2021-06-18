<template>
  <div class="about">
    <!-- <h1>This is an about page</h1> -->

    <p :class="colorClass" :value="100">This is an about page</p>

    <button type="button" @click="actChangeColor" value="ok"> ok</button>
  </div>
</template>


<script>
export default {
  data () {
    return { 
      redClass: '',
      blueClass: '',
      colorClass: ''
    }
  },
  methods: {
    actChangeColor () {

      if (this.colorClass == '') {
        this.colorClass = 'blue';
      } else if (this.colorClass == 'blue') {
         this.colorClass = 'red';
      } else {
        this.colorClass = 'blue';
      }

    }
  }
}
</script>


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

   .red {
     color: red
   }

   .blue {
     color: blue
   }



</style>
