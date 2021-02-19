<template>

  <sideBar id='sideBar' />
  <div id='productCards'>
    <productCard :image='"https://lcdn.altex.ro/resize/media/catalog/product/L/a/16fa6a9aef7ffd6209d5fd9338ffa0b1/Laptop-ASUS-X515-argintiu-windows.jpg"' :name="'Laptop'" />
    <productCard :image='"https://s13emagst.akamaized.net/products/31046/31045535/images/res_a63698ef6392cd7d983f0f59576cfb38.jpg"' :name="'Gaming Pc'" :data="'Pre Built'"/>
    <productCard :image='"https://www.nvidia.com/content/dam/en-zz/Solutions/geforce/ampere/rtx-3090/geforce-rtx-3090-product-gallery-full-screen-3840-2.jpg"' :name="'Components'"/>
  </div>

</template>

<script>

import sideBar from './components/sideBar.vue'
import productCard from './components/productCard.vue'

export default {
  name: 'App',
  components: {
    sideBar,
    productCard
  }
}
</script>

<style>
body, html{
  
  height:100%;
  margin: 0px;

}

#productCards{

  grid-area: recomandation;
  display: flex;
  justify-content: space-between;
  margin-left: 10vw;
  margin-right: 10vw;

}

#app {
  display: grid;
  grid-template-rows: 5vh auto 30vh;
  grid-template-columns: 20vh;
  grid-template-areas: "navBar navBar navBar"
                       "sideBar homePage homePage"
                       "sideBar recomandation recomandation";
    
  height:100%;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
