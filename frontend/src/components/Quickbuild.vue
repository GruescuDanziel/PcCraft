<template>
    <div class="Quickbuild">
      <div class="qbtext">
        <p>Need a quick and personal build?
           Here you can use our Quick Build feature.</p>
      </div>
      <div class="quickbuildlogo">
        <img src="./assets/Quickbuild.svg" alt="">
      </div>
    </div>
</template>
<script>
export default {
    name: 'Quickbuild'
}
</script>

<style scoped>
    .Quickbuild{
      display: flex;
      justify-content: center;
      align-items: center;
      background: #6699CC;
      width: 50%;
      margin: 20%;
      height: 100%;
    }
    .Quickbuild .qbtext{
      font-size: 30px;
      margin-top: 5%;
      color: white;
      width: 45%;

    }
    .Quickbuild .quickbuildlogo img{
      height: 150px;
    }
</style>