<template>
    <div class="Login">
        <div class="user">
            <img src="../assets/User.svg" alt="">
        </div>
        <div class="title">
            <h3>Welcome back , User</h3>
            </div>
        <div class="username">
            <label>Username/E-mail</label>
            </div>
        <div class="inpuser"
            ><input id='userNameInput' type="text" placeholder="John Doe"></div>
        <div class="password">
            <label>Password</label>
        </div>
        <div class="inpass">
            <input id='passwodInput' type="password" placeholder="********"></div>
        <div class="noacc">
            <h4>You do not have an account ?
                <a href="">SignUp</a>
            </h4>
        </div>
        <div class="btn">
            <button @click='loginUser' type="button">Login</button>
        </div>
    </div>
</template>

<script>
import axios from 'axios'
import VueCookies from 'vue-cookies'
export default {
    name: 'login',
    methods:{
      async loginUser(){
        let res = await axios(
          {
              
            method:"GET",
            url:"http://localhost:8000/api/user/login",
            params :{
              email: document.getElementById("userNameInput").value,
              password: document.getElementById("passwodInput").value,
            },
            withCredentials: false,
            'Content-Type': 'application/json'

          }
        );

        console.log(res);

        if(res.data.succes == "Logged in!"){
          VueCookies.set('name', res.data.name,12222)
          VueCookies.set('username', res.data.username,12222)
          VueCookies.set('email', res.data.email,12222)
          VueCookies.set('userStatus','loggedIn',12222)
          this.$emit('loginSuccesful', 'loggedIn')
        }
      }
    }
}
</script>

<style scoped>
    .Login{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        padding-bottom: 20px;
        height: 100%;
        margin: 0 auto;
        margin-top: 5%;
        background-color:#6699CC;
        border-radius: 15px;
        margin-left: 10vw;
        margin-right: 10vw;
    box-shadow: 4px 4px 7px rgba(0, 0, 0, 0.25);
    }
    .Login .user img{
        height: 20vh;
    }
    .Login .title{
        color: white;
    }
    .Login .username label{
        color: white;
        font-size: 3vh;
        margin-right:20vh
        
    }
    .Login .password label{
        color: white;
        font-size: 3vh;
        margin-right: 29vh ;
    }
    .Login .noacc h4{
        color: white;
    }
    .Login .noacc a{
        color: #3066BE;
        text-decoration: none;
    }
    .Login .inpuser input{
        height: 6vh;
        width: 40vh;
        border-style: none;
        border-radius: 15px;
    box-shadow: 4px 4px 7px rgba(0, 0, 0, 0.25);

    }
    .Login .inpass input{
        height: 6vh;
        width: 40vh;
        border-style: none;
        border-radius: 15px;
    box-shadow: 4px 4px 7px rgba(0, 0, 0, 0.25);

    }
    .Login .btn button{
        border-style: none;
        border-radius: 15px;
        height: 6vh;
        width: 35vh;
        background-color: #197BBD;
        color: white;
        font-size: 18px;
    box-shadow: 4px 4px 7px rgba(0, 0, 0, 0.25);
    }
</style>
