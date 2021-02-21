 <template>
  <div id="mainContainer">
    <div id="registerInputs">
      <h3> Username </h3>
      <input id="userNameInput">
      <h3> Email</h3>
      <input id="emailInput">
      <h3> Password </h3>
      <input id="passwordInput">
      <h3> Confirm Password</h3>
      <input id="confirmPasswordInput">

      <div id='alreadyHaveAnAccount'>
        <h3> Already have an account? Log in </h3>
        <button @click='registerUser' type="button">Sign Up</button>
      </div>
          </div>

    <div id="profileInput">
            <h2> Make an account!</h2> 
            <img src="../assets/User.svg" alt="">
            <h1>Upload a profile picture</h1>
    </div>

  </div>


 </template>
<script>


import axios from 'axios'
  export default{
    
    name : "registerPage",
    methods : {
      
      async registerUser(){
        const res = await axios.post('http://2.tcp.ngrok.io:19761/api/user/signup', {
              username:document.getElementById('userNameInput').value,
              email:document.getElementById('emailInput').value,
              password:document.getElementById('passwordInput').value})
        if(res.data == 'account was taken')
          alert("This account was taken")
      }

    }

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
    border-radius: 100%;

  }

  #profileInput h1{
    
    color:white;
    font-size: 4vh;
    padding: 0.5vh;
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
      height: 50%
  }

  #alreadyHaveAnAccount input:hover{
      background:#d4d4d4;
  }
  #alreadyHaveAnAccount h3{
    margin-bottom: 2vh;
    text-align:center;

  }
@media only screen and (max-width:414px){

#mainContainer{
    
  flex-direction: column-reverse;

}

#registerInputs{
  width:100%;
  display:inline;
}

#profileInput img{
  display: none;
}
#profileInput h1{
  font-size: 0;
}
#profileInput{
  width: 100%;
}

}

</style>
