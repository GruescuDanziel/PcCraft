<template>
<div class="Usercontainer">
        <div class="User">
            <div class="img">
                <img src="../assets/User.svg" alt="">
            </div>
            <div class="imgchng">
                <button style="button">Change Profile Picture</button>
            </div>
            <div class="datachng"
                ><button style="button">Change your data</button>
            </div>
            <div class="delacc">
                <button style="button">Delete account</button>
            </div>
        </div>
        <div class="Userdata">
            <div class="name">
                <h2>Gruescu Ipatie Daniel</h2>
            </div>
            <div class="Joindate">
                <h3>12/2/2001</h3>
            </div>  
            <div class="Deliverloc">
                <h2>Location for delivery</h2>
            </div>
            <div class="loc">
                <h4>Moldova Noua , Str. 1 Dec...</h4>
            </div>
            <div class="purchistory">
                <h2>Purchase History:</h2>
            </div>
            <div class="product">
            </div>
    </div>
</div>


</template>

<script>
export default {
    name: 'Userinterface'
}
</script>

<style scoped>
    .Usercontainer{
        display: flex;
    }
    .Usercontainer .User{
        display: flex;
        flex-direction: column;
        width: 50%;
        margin-top: 10%;
        margin-left: 20vh;
    }
    .Usercontainer .User .img img{
        background-color: black;
        height:25vh;
        margin-left: 2vh;
    }
    .Usercontainer .User button{
        width: 30vh;
        height: 5vh;
        border-style: none;
        border-radius: 15px;
        background-color: #6699CC;
        color:white;
        font-size:2vh;
    }
    .Usercontainer .User .imgchng{
        padding-bottom: 2vh;
    }
    .Usercontainer .User .datachng{
        padding-bottom: 2vh;
    }
    .Usercontainer .User .delacc{
        padding-bottom: 2vh;
    }
    .Usercontainer .Userdata{
        background-color: #6699CC;
        width: 45%;
        height: 100%;
        margin-right: 10vh;
        margin-top: 20vh;
        border-radius: 15px;
    }
    .Usercontainer .Userdata h2{
        color: white;
        margin-left: 4vh;
    }
    .Usercontainer .Userdata h3{
        color:white;
        margin-left: 4vh;
    }
    .Usercontainer .Userdata h4{
        color: white;
        margin-left: 6vh;
    }
    .Usercontainer .Userdata .product{
        background-color: white;
        height: 150px;
        width: 25%;
        margin-left: 6vh;

    }
</style>