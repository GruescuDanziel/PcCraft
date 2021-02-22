<template>
  <div id='mainContainer'>
    <div id="NavBar">
        <div class="logo"><img src="../assets/PCraft.svg" alt=""></div>
        <div class="searchbar">
            <input type="search" name="" id="" placeholder="Search...">
            <img src="../assets/Search.svg" alt="">
        </div>
           <div class="icons">
            <img @click="changePage('loginPage')" src="../assets/User.svg" alt="">
            <img @click="changePage('explorePage')" src="../assets/Wishlist.svg" alt="">
            <img @click="changePage('userPage')" src="../assets/Cart.svg">
            <img src="../assets/Quickbuild.svg" alt="">
          </div> 
          <div class='PhoneIcon'>
            
            <img @click="dropDown" src="../assets/BurgerMenu.svg">
          </div>
      </div>
    </div>
</template>

<script>
    export default {
      name: 'NavBar',
      methods:{
        changePage(nextPage){
          this.$emit('changePage', nextPage);
        },
        dropDown(){
            
          this.$emit('dropDown')
        }
      }
}
</script>

<style scoped>
  
  .PhoneIcon{
    display: none;
  }

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
@media only screen and (max-width:414px){


  .icons{
    display:none;
  }
  .PhoneIcon{
    display: inline;
    color: white;
  }

  .PhoneIcon img{
    width: 30%;
  }

  .searchbar{
    width: 40%;
    }
  .searchbar img{
    display:none;
  }
  .searchbar input{
    border-top-right-radius: 15px;
    border-bottom-right-radius: 15px;
  }
  

}
</style>
