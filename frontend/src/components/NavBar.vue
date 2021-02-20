<template>
  <div id='mainContainer'>
    <div id="NavBar">
        <div class="logo"><img src="../assets/PCraft.svg" alt=""></div>
        <div class="searchbar">
            <input type="search" name="" id="" placeholder="Search...">
            <img src="../assets/Search.svg" alt="">
        </div>
           <div class="icons">
            <img src="../assets/User.svg" alt="">
            <img src="../assets/Wishlist.svg" alt="">
            <img src="../assets/Cart.svg">
            <img src="../assets/Quickbuild.svg" alt="">
        </div> 
      </div>
    </div>
</template>

<script>
    export default {
      name: 'NavBar'
}
</script>

<style scoped>
  #mainContainer{

    height: 100%;

  }
    #NavBar img, #NavBar input{
      
      height: 5vh;

    }
    #NavBar{
      display: flex;
      justify-content: space-between;
      align-items: center;
      background:#6699CC ;
      height:100%;
    }
    .logo{
      margin-left: 5vw;
    }
    .searchbar{
      display: flex;
      width: 30%;
      height: 100%;
    }
    .searchbar input{
      width: 100%;
      border-radius: 15px;
      border-top-right-radius: 0px;
      border-bottom-right-radius: 0px;
      border: none;
      border-bottom-right-radius: 0;
      border-top-right-radius: 0;
    }
    .searchbar img{
      border-top-right-radius: 15px;
      border-bottom-right-radius: 15px;
      background: white;
      
    }
    .icons{
      display: flex;
      justify-content: space-between;
      width: 20%;
      margin-right:2%; 
    }
</style>
