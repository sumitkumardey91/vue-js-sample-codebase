<template>
  <div class="main-login">
    <div>
        <img class="login-image" src="../assets/jr-korpa-FmUM5YoM2k0-unsplash.jpg"/>
    </div>

    <div class="login-div">
        <el-input
        placeholder="Please input"
        v-model="email"
        clearable>
        </el-input>
       <div> {{emailError}} </div>
        <el-input placeholder="Please input password" v-model="password" show-password></el-input>

         <el-button type="success" @click="getSuccess()">Success</el-button>

    </div>

  </div>
</template>

<script>
export default {
data () {
    return {
        email: '',
        password: '',
        emailError: ''
    }
},
watch : {
    email (newval) {

        if (newval.includes('@') == true) {
           // alert('valid')
           this.emailError = "success"
        } else {
          //  alert('notvalid')
                     this.emailError = "fail"

        }
    }   
},
methods : {
    getSuccess () {

        if (this.emailError == "success")
        this.$router.push({name: 'About'})
    }
}
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
    top: 5%;
    right: 30%;
    background-color: red;
    height: 26vh;
    width: 34vw;
    padding: 7%;

    

    }
</style>