<template>
    <div class="NavBar">
        <div class="logo"><img src="./assets/PCraft.svg" alt=""></div>
        <div class="searchbar">
            <input type="search" name="" id="" placeholder="Search...">
            <img src="./assets/Search.svg" alt="">
        </div>
           <div class="icons">
            <img src="./assets/User.svg" alt="">
            <img src="./assets/Wishlist.svg" alt="">
            <img src="./assets/Cart.svg">
            <img src="./assets/Quickbuild.svg" alt="">
        </div> 
      </div>
</template>

<script>
    export default {
      name: 'NavBar'
}
</script>

<style scoped>
    .NavBar{
      display: flex;
      align-items: center;
      justify-content: space-between;
      background:#6699CC ;
      width: 100%;
      height: 3%;
      padding: 0;
      margin: 0;
    }
    .logo{
      margin-left: 50px;
    }
    .searchbar{
      display: flex;
      width: 30%;
      height: 100%;
    }
    .searchbar input{
      width: 100%;
      height: 35px;
      border-radius: 10px;
      border: none;
      border-bottom-right-radius: 0;
      border-top-right-radius: 0;
    }
    .searchbar img{
      background: white;
      border-bottom-right-radius: 10px;
      border-top-right-radius: 10px;
      padding-right: 20px;
      
    }
    .icons{
      display: flex;
      justify-content: space-between;
      width: 20%;
      margin-right:2%; 
    }
</style>
