 <template>
  <div id="mainContainer">
    <div id="registerInputs">
      <h3> Username </h3>
      <input>
      <h3> Email</h3>
      <input>
      <h3> Password </h3>
      <input>
      <h3> Confirm Password</h3>
      <input>

      <div id='alreadyHaveAnAccount'>
        <h3> Already have an account? Log in </h3>
        <input type='submit' value="Sign up">
      </div>
          </div>

    <div id="profileInput">
      
            <img src="../assets/User.svg" alt="">
            <h1>Upload a profile picture</h1>
    </div>

  </div>

 </template>
<script>

  export default{
    
    name : "registerPage",

    }

</script>
<style scoped>

    #registerInputs{

    display:flex;
    flex-direction: column;
    width:40%;
    
  }

  #registerInputs h3{
    text-align: left;
    margin-bottom: -0.3vh

  }

  #registerInputs input{
    
    margin-bottom: 2vh;
    border: none;
    height: 4vh;
    width:100%;
    border-radius: 15px;
    box-shadow: 4px 4px 7px rgba(0, 0, 0, 0.25);

  }

  #profileInput img{
    
    width: 100%;
    height: 50vh;
    border-radius: 100%;

  }

  #profileInput h1{
    
    color: black;
    background: white;
    font-size: 4vh;
    padding: 0.5vh;
    border-radius: 15px;
    box-shadow: 4px 4px 7px rgba(0, 0, 0, 0.25);
  }

  #profileInput{
    width: 40vw;
    display:flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    border-radius: 1000px;
  }

  #mainContainer{
    
    display: flex;
    align-items: center;;
    color:white;
    padding:2vh;
    height: 100%;
    background: #6699CC;
    justify-content: space-between;
    margin-top:5vh;
    margin-left:10vw;
    margin-right:10vw;
    border-radius:15px;
    box-shadow: 4px 4px 7px rgba(0, 0, 0, 0.25);

  }
  
  #alreadyHaveAnAccount input{
      width: 75%
  }
  #alreadyHaveAnAccount h3{
    margin-bottom: 2vh;
    text-align:center;

  }



</style>
