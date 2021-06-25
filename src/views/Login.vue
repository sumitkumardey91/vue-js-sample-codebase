<template>
  <div class="main-login">
    <div>
        <img class="login-image" src="https://www.w3schools.com/howto/img_girl.jpg"/>
    </div>



    <div class="login-div">

              <el-button type="primary" round>Primary</el-button>

        <el-input
        placeholder="Please input"
        v-model="email"
        round 
        clearable >
        </el-input>
       <div> {{emailError}} </div>
        <el-input placeholder="Please input password" v-model="password" show-password round></el-input>

         <el-button type="success" @click="getSuccess()">Success</el-button>

    </div>

    <div v-for="(data, index) in dataset" :key="index">
        <h1>{{data.Name}}</h1>
    </div>

  </div>
</template>

<script>

    import  { getPin } from '../services/pin/actGetPin'

    import { Mixins } from '@/mixins/mixins.code.js'

    export default {
        data () {
            return {
                email: '',
                password: '',
                emailError: '',
                dataset: []
            }
        },
        watch : {
            email () {


                 if (!(/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(this.email)))
                {
                     this.emailError = "Invalid email"
                } else {
                    this.emailError = ""
                }
              
            }   
        },
        methods : {
            getSuccess () {
                this.OpenLoader();

                getPin(this.email).then((res) => {
                    console.log("success",res)
                    this.dataset = res.data[0].PostOffice
                    this.CloseLoader()

                    localStorage.setItem("token", "ahtdhwbdwhgdgwdujbd")

                    this.$message.error('Oops, username password wrong.');// toust

                    this.$router.push(
                        {
                            name: 'table'
                        }
                    )  // dynamic redirection 

                    if (res.status != 200) {
                        // error 
                    }
                }).catch((err) => {
                    console.log("catch", err)
                    this.CloseLoader()

                })





            }
        },
        mixins: [Mixins]
    }
</script>

<style>
    .main-login {
        position: relative;
    }
    .login-image {
        height: 100vh;
        width: 100vw;
        background-repeat: no-repeat;
        background-size:cover;
        background-position: center;
    }
    .login-div {
        
        position: absolute;
        top: 30%;
        right: 10%;
        background-color: red;
        height: 26vh;
        width: 34vw;
        padding: 1%;
    }

    @media only screen and (max-width: 600px) {
  .login-div  {
    background-color: lightblue;
    height: auto;
        width: auto;
  }
}
</style>