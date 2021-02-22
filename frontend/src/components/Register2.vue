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
            <div class="nextbtn">
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
        width: 60%;
        height: 60%;
        display: flex;
        flex-direction: column;
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
