<template>
  <div class="">
    parent {{result}}

    <component :is="com" :propsdata="dataset" @myownevent="getmeback"></component>

    

  </div>
</template>


<script>
export default {
  data () {
    return { 
        dataset: '1000',
        com: '',
        result: ''
    }
  },
  methods: {
    getmeback (val) {
      console.log("val")
      this.result = val
    }
  },
  mounted () {

    this.com = () => import('./Child.vue')

  }

}
</script>

<style lang="scss" scoped>

</style>

