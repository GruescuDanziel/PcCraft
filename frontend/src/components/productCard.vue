<template>
  <div id='mainContainer'>
    <div id='productCard'>
      <div id='productImage'>
        <img :src="image" />
      </div>
      <div id='productData'>
        <h1> {{name}} </h1>
        <h3> {{data}} </h3>
      </div>

    </div>

  </div>

</template>
<style scoped>

  #productCard{
    
    background: white;
    height: 25vh;
    width: 20vw;
    border-radius: 15px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);

  }

  #productImage img{
    width: 50%;
  }

  #productData{
    
    font-size: 1vw;
  
  }

  
@media only screen and (max-width:414px){

  #productCard{
    
    height: 15vh;
    width: 100%;
    border-radius: 15px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);

  }

  #productImage img{
    width: 20vw;
  }
  
  #productData{
    
    font-size: 2vw;
  
  }


}

</style>
<script>
export default{
  
  props : ['image', 'data', 'price', 'name'],
  name : "productCard",
     }

</script>
