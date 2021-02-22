<template>
    <div class="Registercontainer">
        <div class="Registercontent">
            <div class="Location">
                <label for="location">Location</label>
            </div>
            <div class="locinp">
                <input type="text">
            </div>
            <div class="Phonenumber">
                <label for="phonenumber">Phone number</label>
            </div>
            <div class="phoneinp">
                <input type="text">
            </div>
            <div class="Email">
                <label for="email">E-mail</label>
            </div>
            <div class="emailinp">
                <input type="text">
            </div>
            <div class="Bday">
                <label for="birthday">Birthday</label>
            </div>
            <div class="bdayinp">
                <input type="text" placeholder="27/02/1990"> 
            </div>
            <div class="signupbtn">
                <button type="Button"><h2>Sign Up</h2></button>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name:'Register2'
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
    .Registercontainer .Registercontent .signupbtn{
        padding: 2vh;
    }    
    .Registercontainer .Registercontent .signupbtn button{
        margin: 0 auto;
        display: flex;
        justify-content: space-between;
        border-style: none;
        border-radius: 15px;
        background-color:#197BBD;
        width: 75%;
        height: 8vh;
        color: white;
        font-size: 2vh;
    }
    .Registercontainer .Registercontent .signupbtn h2{
        margin-left: 10vh;

        
    }
</style>