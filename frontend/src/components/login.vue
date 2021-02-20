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
            ><input type="text" placeholder="John Doe"></div>
        <div class="password">
            <label>Password</label>
        </div>
        <div class="inpass">
            <input type="password" placeholder="********"></div>
        <div class="noacc">
            <h4>You do not have an account ?
                <a href="">SignUp</a>
            </h4>
        </div>
        <div class="btn">
            <button type="button">Login</button>
        </div>
    </div>
</template>

<script>
export default {
    name: 'login'
}
</script>

<style scoped>
    .Login{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        padding-bottom: 20px;
        width: 98%;
        height: 100%;
        margin: 0 auto;
        margin-top: 5%;
        background-color:#6699CC;
        border-radius: 15px;
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

    }
    .Login .inpass input{
        height: 6vh;
        width: 40vh;
        border-style: none;
        border-radius: 15px;

    }
    .Login .btn button{
        border-style: none;
        border-radius: 15px;
        height: 6vh;
        width: 35vh;
        background-color: #197BBD;
        color: white;
        font-size: 18px;

    }
</style>