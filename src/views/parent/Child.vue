<template>
  <div class="">
    child {{propsdata}}

    <button type="button" value="clickme" @click="action()">clickme</button>

    {{getMeCompute}} <br/>
    {{getMeCompute}} <br/>
    {{getMeCompute}} <br/>
  </div>
</template>


<script>
export default {
  data () {
    return { 
        row: '8000'
    }
  },
  computed: {
      getMeCompute () {

        // 100 line
        return Math.random()
      }
  },
  methods: {
    action () {
      // 100 line
      console.log(Math.random());

      // this.$emit('myownevent', this.row);
    }
  },
  props: ['propsdata'],
  mounted () {


  }

}
</script>

<style lang="scss" scoped>

</style>

