<template>
  <div class="about">
    <!-- <h1>This is an about page</h1> -->

     Dymanic {{dataset}}
  </div>
</template>


<script>
export default {
  data () {
    return { 
        dataset: ''
    }
  },
  mounted () {
    //   this.dataset = this.$route.params.id

      this.dataset = this.$route.query.name


  }

}
</script>

