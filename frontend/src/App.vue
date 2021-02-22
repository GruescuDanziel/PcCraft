<template>

  <navbar @dropDown="dropSideBar" @changePage="changePage" id='navBar' />
  <div v-if='currentPage == "homePage"' id='homePage'>
    <sideBar @changePage="changePage" id='sideBar' />
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
    <registerPage />

  </div>
  
  <div v-if='currentPage == "explorePage"' id='explorePage'>
      
      <li v-for='s in 9' :key='s.key'>
      <productCard class='productCardExplore' :image='"https://www.nvidia.com/content/dam/en-zz/Solutions/geforce/ampere/rtx-3090/geforce-rtx-3090-product-gallery-full-screen-3840-2.jpg"' :name="'Components'"/>
      </li>
    

  </div>


  <div v-if='currentPage == "loginPage"' id='loginPage'>
    <sideBar @changePage="changePage" id='sideBar' />
    <loginPage />
  </div>    

</template>

<script>

import sideBar from './components/sideBar.vue'
import productCard from './components/productCard.vue'
import navbar from './components/NavBar.vue'
import quickBuild from './components/Quickbuild.vue'
import registerPage from './components/registerPage.vue'
import loginPage from './components/login.vue'


export default {
  name: 'App',
  components: {
    sideBar,
    productCard,
    navbar,
    quickBuild,
    registerPage,
    loginPage
  },
  data(){
    
    return{
      currentPage: "homePage"
    }

  },
  methods: {
    changePage(nextPage){
        
        this.currentPage = nextPage

    },

    dropSideBar(){

      if(document.getElementById('sideBar').style.display !='none'){
        document.getElementById('sideBar').style.display = 'none';
        document.getElementById('quickBuild').style.filter = "none"
        document.getElementById('productCardsPhone').style.filter = "none"
      }
      else{
        document.getElementById('sideBar').style.display = 'block';
        document.getElementById('quickBuild').style.filter = "blur(2px)"
        document.getElementById('productCardsPhone').style.filter = "blur(2px)"
      }
    }
    

  },

  mounted(){
 
      
      if(document.getElementById('sideBar').style.display !='none' && screen.width <= 414){
        document.getElementById('sideBar').style.display = 'none';
        document.getElementById('quickBuild').style.filter = "none"
        document.getElementById('productCardsPhone').style.filter = "none"
      }
      else if(document.getElementById('sideBar').style.display =='none' && screen.width <= 414){
        document.getElementById('sideBar').style.display = 'block';
        document.getElementById('quickBuild').style.filter = "blur(2px)"
        document.getElementById('productCardsPhone').style.filter = "blur(2px)"
      }   
  }
}

</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Share&display=swap');

*{

  font-family: Share;
}

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

height:70%;

}

#app {
  
  height:100%;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#explorePage li{
  
  list-style: none;
  margin-left: 10vw;
  margin-bottom: 5vw;

}

#explorePage{
  
  display: flex;
  column-count: 3;
  flex-wrap: wrap;

}


#homePage #sideBar{
  display:block;
}

#sideBar{
  display:none;
}

@media only screen and (max-width:414px){

#explorePage li{
  position:relative;
  width: 100%;
  margin:3vh;
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

#productCards{

  display:none;
}


}
</style>
