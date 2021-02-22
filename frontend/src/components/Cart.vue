<template>
    <div class="Cartcontent">
        <div class="product">
            <div class="productname">
                <h1>GTX 3090</h1>
            </div>
            <div class="productdescription">
                <h3>description</h3>
            </div>
            <div class="productprice">
                <h4>2000 LEI</h4>
            </div>
        </div>
        <div class="orderbtn">
            <button type="button">Order Now</button>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Cart',
}
</script>

<style scoped>
    .Cartcontent{
        display: flex;
        flex-direction: column;
        background-color: #6699CC;
        height: 100%;
        width: 100%;
        padding: 2vh;
        margin-top: 17vh;
    }
    .Cartcontent .product{
        
        background: white;
        width:75%;
        margin-left: 25vh;
        border-radius: 15px;
    }
    .Cartcontent .product .productname{
        margin-left: 35vh;
    }
    .Cartcontent .product .productdescription{
        margin-left: 40vh;
    }
    .Cartcontent .product .productprice{
        margin-left: 90%;
    }
    .Cartcontent .orderbtn button{
        border-style: none;
        border-radius: 15px;
        color: white;
        background-color:#197BBD;
        width: 20vh;
        height: 8vh;
        margin-left: 75%;
        margin-top: 2vh;
    }
</style>