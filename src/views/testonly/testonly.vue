<template>
  <div id="home">
    test {{name}}
    <h1 @click="actClickMe()"> click me </h1>
    <input type="text" placeholder="enter email"  v-model="email" />  {{errorMessaage}}
    <input type="password" placeholder="enter password"  v-model="password" />

    <button type="button" @click="actClickMe()" value="send">send11</button>

    <child-tag :propsName="lastName" :filterData="filterData"></child-tag>

    <div v-for="(item, key) in filterData" :key="key">
      <h2>{{item}}</h2>
    </div>


    <hr/>

    <div v-for="(item, key) in filterData" :key="key+100">
       <div v-if="item == 'orange'">
         this is {{item}}
       </div>
       <div v-else>
            this is not orange 
       </div>
    </div>
  <router-view></router-view>
  </div>
</template>

<script>
  import Child from './components/Child.vue'

  export default {
    data() { // data: function () // init state of variable
      return {
        name: 'blr',
        lastName: 'delhi',
        email: '',
        password: '',
        dataset: {},
        filterData: ['apple', 'orange', 'banana', 'mango'],
        errorMessaage: ''
      }
    },
    methods: { // methods: function
      actClickMe () {
        this.dataset.email = this.email;
        this.dataset.password = this.password;

        console.log("this.dataset", this.dataset)

      },
      checkEmail (val) {
        if (val.length == 10) {
            this.errorMessaage = "success"
        } else {
          this.errorMessaage = "fail"

        } 
      }
    
    },
    mounted () { // mounted: function
        this.name = "welcome"
      // main function
      console.log("mounted")

    },
    created () { // created: function
    
      console.log("created")
    
    },
    watch: { // watch: function
      email (newValue) { // watch: function
      
        // console.log("email", newValue)
        this.checkEmail(newValue)

      
      }
    }, 
    components : {
      "child-tag": Child
    }
  }
</script>

<style scoped>

</style>