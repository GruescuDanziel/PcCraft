<template>

  <navbar @dropDown="dropSideBar" @changePage="changePage" :navBarMode="navBarMode" id='navBar' />
  <div v-if='currentPage == "homePage"' id='homePage'>
    <sideBar @changePage="changePage" id='sideBar' />
    <h1 @click='logOut' > LOG OUT </h1>
    <div id='quickBuild'>
    <quick-build />
    </div>
    <div id='productCardsPhone'>
      <productCard :image='"https://i.pinimg.com/originals/fb/0e/8c/fb0e8cb8ad4c476de3f1a3dc1a445e2d.jpg"' :name="'Pre Built Setups'"/>
      <productCard :image='"https://www.nvidia.com/content/dam/en-zz/Solutions/geforce/ampere/rtx-3090/geforce-rtx-3090-product-gallery-full-screen-3840-2.jpg"' :name="'Components'"/>
    </div>
  <div id='productCards'>
      <productCard :image='"https://lcdn.altex.ro/resize/media/catalog/product/L/a/16fa6a9aef7ffd6209d5fd9338ffa0b1/Laptop-ASUS-X515-argintiu-windows.jpg"' :name="'Laptop'" />
      <productCard :image='"https://s13emagst.akamaized.net/products/31046/31045535/images/res_a63698ef6392cd7d983f0f59576cfb38.jpg"' :name="'Gaming Pc'" :data="'Pre Built'"/>
      <productCard :image='"https://www.nvidia.com/content/dam/en-zz/Solutions/geforce/ampere/rtx-3090/geforce-rtx-3090-product-gallery-full-screen-3840-2.jpg"' :name="'Components'"/>
    </div>
  </div>
  <div @register='registerUser' v-if='currentPage == "registerPage"' id='registerPage'>
    <sideBar @changePage="changePage" id='sideBar' />
    <registerPage v-if="currentReg == 1" @nextReg="nextReg" />
    <registerPage2 v-if="currentReg == 2" @finishedRegister="changePage('loginPage')" />

  </div>

  <div v-if='currentPage == "userPage"' class='userPage'>
      
    <sideBar @changePage="changePage" id='sideBar' />
      <userInterface />
    
  </div>
  
  <div v-if='currentPage == "explorePage"' id='explorePage'>
      
    <sideBar @changePage="changePage" id='sideBar' />
      <li class="explorePageProduct" v-for='s in 9' :key='s.key'>
      <productCard class='productCardExplore' :image='"https://www.nvidia.com/content/dam/en-zz/Solutions/geforce/ampere/rtx-3090/geforce-rtx-3090-product-gallery-full-screen-3840-2.jpg"' :name="'Components'"/>
      </li>
    

  </div>

  <div v-if='currentPage == "cartPage"' id='cartPage'> 
    <cartInterface />
  </div>

  <div v-if='currentPage == "loginPage"' id='loginPage'>
    <sideBar @changePage="changePage" id='sideBar' />
    <loginPage @loginSuccesful="changeNavBar" />
  </div>    

</template>

<script>

  import axios from 'axios'
  import VueCookies from 'vue-cookies'
  
  import sideBar from './components/sideBar.vue'
  import navbar from './components/NavBar.vue'
  
  import productCard from './components/productCard.vue'
  import quickBuild from './components/Quickbuild.vue'
  
  import registerPage from './components/Register.vue'
  import registerPage2 from './components/Register2.vue'
  import loginPage from './components/login.vue'
  import userInterface from './components/Userinterface.vue'
  import cartInterface from './components/Cart.vue'
  
  
  export default {
    name: 'App',
    components: {
      sideBar,
      productCard,
      navbar,
      quickBuild,
      registerPage,
      loginPage,
      userInterface,
      registerPage2,
      cartInterface
    },
    data(){
      return{
        currentPage: "homePage",
        currentReg : 1,
        navBarMode : VueCookies.get('userStatus')
      }
    },
    methods: {
      changePage(nextPage){
        this.currentPage = nextPage
      },
      nextReg(){
        this.currentReg = 2;
      },
      dropSideBar(){
        if(document.getElementById('sideBar').style.display !='none'){
          document.getElementById('sideBar').style.display = 'none';
          document.getElementById('quickBuild').style.filter = "none"
          document.getElementById('productCardsPhone').style.filter = "none"
        }else{
          document.getElementById('sideBar').style.display = 'block';
          document.getElementById('quickBuild').style.filter = "blur(2px)"
          document.getElementById('productCardsPhone').style.filter = "blur(2px)"
        }
      },
      changeNavBar(newMode){
        this.navBarMode = newMode;
        this.currentPage = 'homePage';
      },
      checkUserStatus(){
        if(VueCookies.get('userStatus') ==null){
          VueCookies.set('userStatus', 'Guest', 1222222)
        }
        console.log(VueCookies.get('userStatus'))

      },
      logOut(){
        console.log(VueCookies.keys())
        for(let i = 0; i < 5; i++){
          for (let key in VueCookies.keys()){
            VueCookies.remove(VueCookies.keys()[key]);
          }
        }

      }
    },
    created(){


      this.checkUserStatus();
    },
    mounted(){
      this.checkUserStatus();
      axios.post('http://localhost:8000/api/jwt/startup');
      this.dropSideBar();
    }
}
</script>
<style>
  @import url('https://fonts.googleapis.com/css2?family=Share&display=swap');

  *{font-family: Share;}

  body, html{
    overflow-y:hidden;
    height:100%;
    margin: 0px;
    }

  #quickBuild{
    grid-area: homePage;
    display: flex;
    justify-content: center;
    align-self: center;
    height:90%;
  }
  
  #navBar{
    grid-area: navBar;
    background:#6699CC ;
  }
  
  #productCards, #productCardsPhone{
    grid-area: recomandation;
    display: flex;
    justify-content: space-between;
    margin-left: 10vw;
    margin-right: 10vw;
  }
  
  #homePage{
    display: grid;
    grid-template-areas: "sideBar homePage homePage"
                         "sideBar recomandation recomandation";
    grid-template-rows: auto 30vh;
    grid-template-columns: 20vh auto auto;
    height:100%;
  }
  
  #registerPage{
    display: flex;
    justify-content: center;
    align-items: center;
    height:100%;
  }

  #cartPage{
    
    display:flex;
    justify-content: center;
    align-items:center;
    
  }
  
  #app {
    height:100%;
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
  }
  
  #explorePage .explorePageProduct{
    list-style: none;
    margin-left: 10vw;
    margin-bottom: 5vw;
  }
  
  #explorePage{
    display: flex;
    column-count: 3;
    flex-wrap: wrap;
  }
  
  #homePage #sideBar{display:block;}
  
  #sideBar{display:none;}

  
  @media only screen and (max-width:414px){
  
    #explorePage .explorePageProduct{
      position:relative;
      width: 100%;
      margin:3vh;
    }


    #mediaPage{

      display:flex;
      justify-content:center;
      align-items:center;

    }
    
    
    #homePage{
        grid-template-columns: 100% auto;
        grid-template-areas: "homePage sideBar"
                             "recomandation sideBar";
      }
      #quickBuild{
        width:100%;
        display: flex;
        justify-content: center;
        align-self: center;
    }
    
    #sideBar{
      display:block;
      position: fixed;
      z-index: 1000;
      right:0px; 
    }
    
    #productCards{display:none;}

    .userPage{height:100%;}
  }
</style>
