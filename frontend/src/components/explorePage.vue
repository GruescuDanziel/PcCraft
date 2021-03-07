<template>
  <div id="mainContainer">


  </div>

</template>
<script>
  
  import axios from 'axios'

  export default{
    name: "explorePage",
    methods:{
      getProducts(){
        axios({
          method :"GET",
          url : "http://localhost:8000/api/products/getAll"



        })

      }


    }
  }

</script>
<style scope>


</style>
