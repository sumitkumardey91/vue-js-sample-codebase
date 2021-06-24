<template>
  <div class="">
    parent {{result}}

    <component :is="com" :propsdata="dataset" @myownevent="getmeback"></component>

    <div>
      <el-pagination
        background
        layout="prev, pager, next"
        @current-change="actGetCurrentPage"
        :total="totalPage">
      </el-pagination>

    </div>

  </div>
</template>


<script>
import { postDataPost } from '@/services/pin/actGetPin'

export default {
  data () {
    return { 
        dataset: '1000',
        com: '',
        result: '',
        totalPage: 20,
        limit: 20
    }
  },
  methods: {
    getmeback (val) {
      console.log("val")
      this.result = val
    },
    actGetCurrentPage (page) {


      console.log("<host>/data?page="+ page +"&limit=" + this.limit) // call API

        var data = new FormData();
        data.append('limit', this.totalPage);
        data.append('page', page);

        postDataPost(data).then((res) => {
          console.log("res", res)
        }).catch(() => {

        })

    }
  },
  mounted () {

    this.com = () => import('./Child.vue')
    // API call get new data

    this.totalPage = this.totalPage * 10;



  }

}
</script>

<style lang="scss" scoped>

</style>

