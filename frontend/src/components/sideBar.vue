<template>
  <div id='mainContainer'>
    <div id='sideBar'>
      <div id='bigScreenList'>
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
      <div id='phoneScreenList'>
        <ul>
          <div id='phoneIcons'>
            <img @click="changePage('registerPage')" src="../assets/Vector-1.svg" alt="">
            <img @click="changePage('explorePage')" src="../assets/Vector.svg" alt="">
            <img @click="changePage('userPage')" src="../assets/Vector-2.svg">
            <img src="../assets/Group8.svg" alt="">
          </div>
          <li>Cpu</li>
          <li>Gpu</li>
          <li>MotherBoards</li>
          <li>Cases</li>
          <li>Mouses</li>
          <li>Power Bricks</li>
          <li>Monitors</li>
          <li>Laptops</li>
          <li>Keyboards</li></ul>
      </div>
    </div>
  </div>
</template>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Share&display=swap');

  #sideBar li{list-style-type: none;}

  #sideBar ul{
    height: 50%;
    text-align: left;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    font-size: 2.5vh; 
    margin-top:0px;
  }

  #sideBar{
    padding: 0px;
    height:100%;
    font-size: 2.5vh; 
    font-family: Share;
    box-shadow: 12px 4px 20px rgba(0, 0, 0, 0.25);
    grid-area:sideBar;
  }


  #phoneScreenList{
    display:none;
  }

  @media only screen and (max-width:414px){


    #sideBar ul{
        
        text-align:right;
    }

    #sideBar{
      box-shadow: none;;
      background: rgba(255,255,255,0.7);
      width: 40%;

    }

    #sideBar li{
    margin-bottom: 1vh;
    }

    #bigScreenList{

    display: none;

    }

    #phoneScreenList{
      display:block;
    }

    #phoneScreenList ul{

    width: 100%;
    padding: 0px;

    }

    #phoneIcons{
    display: flex;
    width:100%;
    flex-direction: row;
    justify-content: space-between;
    margin-top: 10%;
    }

    #phoneIcons img{
      width:18%;
    }

  }


</style>

<script>
export default {
   methods:{
        changePage(nextPage){
          this.$emit('changePage', nextPage);
        },
      }
 

}
</script>
