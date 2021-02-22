<template>
  <div class="Wishcont">
    <div class="Wishcontainer">
      <div class="productname">
        <h2>GTX 3090</h2>
      </div>
      <div class="productdescr">
        <h3>description</h3>
      </div>
      <div class="productprice">
        <h3>2000 LEI</h3>
      </div>
      <div class="inbasket">
        <button type="button">In basket</button>
      </div>
    </div>
  </div>
</template>

<script>
  export default {name: 'Wishlist'}
</script>

<style scoped>
  .Wishcont{
    display:flex;
    background-color:#6699CC;
    width:100%;
    height: 100%;
    padding: 2vh;

    }
  .Wishcont .Wishcontainer{
    background-color: white;
    width: 80%;
    margin: 0 auto;
    border-radius: 15px;
    }
  .Wishcont .Wishcontainer .productname h2{margin-left: 28vh;}

  .Wishcont .Wishcontainer .productdescr{margin-left: 25vh;}

  .Wishcont .Wishcontainer .productprice h3{margin-left: 82%;}

  .Wishcont .Wishcontainer .inbasket button{
    margin-left: 80%;
    height: 6vh;
    width:10%;
    border-style: none;
    border-radius: 15px;
    background-color: #197BBD;
    color:white;
    font-size: 2vh;
    }
</style>
