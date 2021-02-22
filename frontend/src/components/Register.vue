<template>
    <div class="Registercontainer">
        <div class="Registercontent">
            <div class="Firstname">
                <label for="firstname">First name</label>
            </div>
            <div class="fnameinp">
                <input type="text">
            </div>
            <div class="Lastname">
                <label for="lastname">Last name</label>
            </div>
            <div class="lnameinp">
                <input type="text">
            </div>
            <div class="username">
                <label for="username">Username</label>
            </div>
            <div class="userinp">
                <input type="text">
            </div>
            <div class="Password">
                <label for="password">Password</label>
            </div>
            <div class="passinp">
                <input type="text">
            </div>
            <div class="nextbtn">
                <button type="Button"><h2>Next</h2> <img src="../assets/Next.svg" alt=""></button>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Register'
}
</script>

<style scoped>
    .Registercontainer{
        width: 100%;
        height: 100%;
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-content: center;
        background-color:#6699CC ;
        padding: 2vh;
    }
    .Registercontainer .Registercontent label{
        color: white;
        font-size: 3vh;
    }
    .Registercontainer .Registercontent input{
        border-style: none;
        border-radius: 15px;
        height: 6vh;
        width: 350px;
    }
    .Registercontainer .Registercontent .nextbtn{
        padding: 2vh;
    }    
    .Registercontainer .Registercontent .nextbtn img{
        height: 7vh;
        margin-top: 2px;
    }
    .Registercontainer .Registercontent .nextbtn h2{
        margin-left:8vh;
        color: white;
    }
    .Registercontainer .Registercontent .nextbtn button{
        margin: 0 auto;
        display: flex;
        justify-content: space-between;
        border-style: none;
        border-radius: 15px;
        background-color:#197BBD;
        width: 75%;
        height: 8vh;
        
    }

</style>