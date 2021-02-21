<template>
    <div class="Quickbuild">
      <div class="qbtext">
        <p>Need a quick and personal build?
           Here you can use our Quick Build feature.</p>
      </div>
      <div class="quickbuildlogo">
        <img src="../assets/Quickbuild.svg" alt="">
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
      height: 100%;
      width: 90%;
      box-shadow: 6px 4px 10px rgba(0, 0, 0, 0.25);
      border-radius: 15px;
    }
    .Quickbuild .qbtext{
      color: white;
      width: 40vw;
      font-size: 5vw;
      margin-right: 1vw;

    }
    .Quickbuild .quickbuildlogo img{
      height: 40vh;
    }
@media only screen and (max-width:414px){
  
  .Quickbuild{
    
    flex-direction: column-reverse;
    width:90%;
    height: 100%;

  }

  .Quickbuild .qbtext p{
    font-size: 7vw;
    width:100%;
  }

  .Quickbuild .quickbuildlogo img{
      
      height: 19vh;
      padding-top: 4vh;

  }

}
</style>
