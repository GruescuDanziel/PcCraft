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

  

</style>
<script>
export default{
  
  props : ['image', 'data', 'price', 'name'],
  name : "productCard"

}

</script>
