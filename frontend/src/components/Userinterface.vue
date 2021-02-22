<template>
  <div class="Usercontainer">
    <div class="User">
      <div class="img">
        <img src="../assets/User.svg" alt="">
      </div>
      <div class="buttonsPc">
        <div class="imgchng">
          <button style="button">Change Profile Picture</button>
        </div>
        <div class="datachng">
          <button style="button">Change your data</button>
        </div>
        <div class="delacc">
          <button style="button">Delete account</button>
        </div>
      </div>
      </div>
      <div class="Userdata">
        <div class="Settings">
          <img src="../assets/Cox.svg">
        </div>
        <div class="name">
          <h2>{{name}}</h2>
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
        <div class="PCProduceHistory">
          <div class="purchistory">
            <h2>Purchase History:</h2>
          </div>
          <div id='produceHistory'>
            <productCard />
            <productCard />
          </div>
        </div>
        <div class="TellProduceHistory">
          <button> View produce history </button>
        </div>
      </div>
  </div>
</template>

<script>

import productCard from './productCard.vue'
import VueCookies from 'vue-cookies'

export default {
  name: 'Userinterface',
  props : ['email'],
  data(){
    return{
      name: VueCookies.get('userName')}
    },
  components:{
    productCard,
  }
}
</script>

<style scoped>
  .Usercontainer{
    display: flex;
    justify-content: space-between;
  }
  .Usercontainer .User{
    display: flex;
    flex-direction: column;
    margin-top: 10%;
    margin-left: 20vh;
  }
  .Usercontainer .User .img img{
    width: 100%;
    border-radius: 15px;
    background-color: black;
  }
  .Settings{
      display:none;
  }

  .TellProduceHistory{
    display: none;
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
    width: 25%;
    margin-left: 6vh;
  }
  #produceHistory{
    margin: 10px;
    display:flex;
    justify-content: space-between;
   }

   
  @media only screen and (max-width:414px){

    .Usercontainer .User, .Usercontainer .Userdata{
      width: 90%;
      margin:0px;
    }

    .User{
      height: 40%;
    }

    .User img{


      width: 100%;
      border-radius: 15px;

    }


    .Usercontainer{
      flex-direction: column;
      align-items: center;
      justify-content: space-evenly;
      height: 100%;
    }
    .PCProduceHistory{
      display: none;
    }
    .buttonsPc{
      display:none;
    }
    .Settings{
      display: block;
      text-align: right;
      margin: 10px;
    }
    .TellProduceHistory{display: block;}
    .TellProduceHistory button{
      border: 0;
      width: 50vw;
      height: 5vh;
      color: white;
      border-radius: 15px;
      margin-bottom: 4vh;
      background: #3066BE;
    }
  }
</style>
