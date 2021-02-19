<template>
  <div id='mainContainer'>

    <div id='sideBar'>
      <ul>
      
        <li>Cpu</li>
        <li>Gpu</li>
        <li>MotherBoards</li>
        <li>Cases</li>
        <li>Mouses</li>
        <li>Power Bricks</li>
        <li>Monitors</li>
        <li>Laptops</li>
        <li>Keyboards</li>

      </ul>


    </div>
  </div>
</template>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Share&display=swap');

  #mainContainer{
    
    display: grid;
    height:100%;

  }

  #sideBar li{
    
    list-style-type: none;

  }

  #sideBar ul{
    
    height: 50%;
    text-align: left;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    font-size: 2.5vh; 

  }

  #sideBar{

    grid-area: sideBar;
    width: 20vh;
    padding: 0px;
    height:100%;
    font-size: 2.5vh; 
    font-family: Share;
    box-shadow: 12px 4px 20px rgba(0, 0, 0, 0.25);
  

  }

</style>

<script>
export default {
  
}
</script>
