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
                <button type="Button"><h2>Next</h2> </button>
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
        width: 60%;
        height: 60%;
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-content: center;
        background-color:#6699CC ;
        padding: 2vh;
        border-radius: 15px;
        box-shadow: 6px 4px 10px rgba(0, 0, 0, 0.25);
    }
    .Registercontainer .Registercontent label{
        color: white;
        font-size: 3vh;
    }
    .Registercontainer .Registercontent input{
        border-style: none;
        border-radius: 15px;
        height: 6vh;
        width: 60vw;
        box-shadow: 6px 4px 10px rgba(0, 0, 0, 0.25);
    }
    .Registercontainer .Registercontent .nextbtn{
        padding: 2vh;
    }    
    .Registercontainer .Registercontent .nextbtn img{
        height: 7vh;
        margin-top: 2px;
    }
    .Registercontainer .Registercontent .nextbtn h2{
        color: white;
        width: 100%;
    }
    .Registercontainer .Registercontent .nextbtn button{
        margin: 0 auto;
        display: flex;
        justify-content: space-between;
        border-style: none;
        border-radius: 15px;
        background-color:#197BBD;
        width: 75%;
        box-shadow: 6px 4px 10px rgba(0, 0, 0, 0.25);
        height: 8vh;
        
    }

</style>
