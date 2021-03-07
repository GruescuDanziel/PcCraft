<template>
        <div class="Container">
            <div class="Forgot"> 
            <input type="text" placeholder="E-mail">
            <button type="button">Restore</button>
            </div>
        <div class="triangle">
        </div>
        </div>
</template>

<script>
export default {
    name:'Forgot'
}
</script>

<style scoped>
    .Forgot{
        display: flex;
        flex-direction: column; 
        background-color: white;
        padding:5vh;
        height: 27vh;
        width: 25%;
        justify-content: center;
        align-items: center;
        box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
        border-radius: 15px;
        margin-left: 35%;
        margin-top: 10%;

    }
    .Forgot input{
        width:80%;
        height:50px;
        margin-bottom: 5vh;
        border-style: none;
        border-radius: 15px;
        background-color: #E9EBEE;
        box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    }
    .Forgot button{
       width: 40%;
       height: 40px; 
       background-color: #197BBD;
       color: white;
       border-radius: 15px;
       border-style: none;
       font-size: 20px;
       box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    }
    .Container .triangle{
        width: 0; 
        height: 0; 
        border-left: 30px solid transparent;
        border-right: 30px solid transparent;
        border-top: 30px solid white;
        margin-left: 45%;
    }
</style>