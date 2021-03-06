<template>
<div class="Container"> 
    <div class="Cart">
        <div class="yourcart">
            <h1>Your Cart</h1>
        </div>
            <div class="product1">
                <img src="../assets/gtx.png" alt="">
                <div class="productxt">
                    <h2>GTX 1069</h2>
                    <h4>Description</h4>
                </div>
                <div class="removebtn">
                    <button type="button">Remove</button>
                </div>
            </div>
    </div>
    <div class="checkout">
        <h1>Checkout</h1>
        <input type="text" placeholder="promocode">
        <div class="productlist">
            <h3>GTX 1069 200 LEI x1</h3>
            <h3>PC Case 200 LEI x1</h3>
        </div>
        <h2>Total:400 LEI</h2>
        <button type="button">Order now</button>
    </div>
</div>
</template>

<script>
export default {
    name:'Cart'
}
</script>

<style scoped>
    *{

        text-align: center;

    }
    .Container{
        background-color: #669cc6;
        width: 80%;
        height: 100%;
        display: flex;
        flex-direction:row;
        margin-left: 25vh;
        padding: 0;
        margin-top: 20vh;
        border-radius:15px;
    }
    .Container .Cart{
        background-color: white;
        height:20%;
        width: 45%;
        margin-left: 20px;
        margin-top: 20px;
        margin-bottom: 20px;
        border-bottom: 2px black;

    }
    .Container .Cart .yourcart h1{
        background: #E9EBEE;
        width: 100%;
        height: 9vh;
        margin-top: 0;
    }
    .Container .Cart .product1 img{
        width:15vh;
        height: 15vh;
        margin-left: 2vh;
    }
    .Container .Cart .product1{
        display: flex;
        border-bottom: 2px black;

    }
    .Container .Cart .product1 h2{
        margin-left: 20vh;
    }
    .Container .Cart .product1 .removebtn{
        margin-top: 17%;
        margin-left: 6vh;
    }
    .Container .Cart .product1 .removebtn button{
        height:6vh;
        width: 20vh;
        border-style: none;
        border-radius: 15px;
        margin-bottom: 20px;
        color: white;
        background-color: #197BBD;
        font-size: 16px;
        margin-right: 6px;
    }
    .Container .checkout{
        display: flex;
        flex-direction: column;
        background-color: #E9EBEE;
        width: 30%;
        margin-left: 37vh;
        margin-bottom: 20px;
        margin-top: 20px;
    }
    .Container .checkout h1{
        margin-right: 27vh;
    }
    .Container .checkout .productlist h3{
        margin-right: 21vh;
    }
    .Container .checkout input{
        width: 45%;
        height: 35px;
        border-style: none;
        border-radius: 15px;
        margin-left: 3vh;
    }
    .Container .checkout .productlist{
        border: 2px solid black;
        margin-top: 2vh;
    }
    .Container .checkout button{
        width: 20vh;
        height: 6vh;
        margin-left:15vh;
        border-style: none;
        border-radius: 15px;
        background-color: #197BBD;
        color: white;
        font-size: 16px;
        margin-bottom: 20px;
    }
</style>
