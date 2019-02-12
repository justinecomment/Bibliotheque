<template>
  <div id="Login">
    <form @submit.prevent="registerOrLogin(btnSelect)">
      
      <div class="menu-btn">
        <button 
          @click="btnSelect = 'signin'" 
          :class="{'highlighted': btnSelect === 'signin' }">Connexion</button>
        <button
          @click="btnSelect = 'signup'" 
          :class="{'highlighted': btnSelect === 'signup' }">Créer un compte</button>
      </div>

      <md-field 
        md-clearable 
        :class="{'md-invalid' : !usernameValid }">
        <label>username</label>
        <md-input 
          v-model="user.username"></md-input>
        <span class="md-error errors" v-if="!user.username">Username requis</span>
      </md-field>

      <md-field 
        md-clearable 
        :class="{'md-invalid' : !passwordValid}">
        <label>Mot de Passe</label>
        <md-input 
          v-model="user.password" 
          type="password"></md-input>
        <span class="md-error errors" v-if="!user.password">Mot de passe requis</span>
      </md-field>

      <md-field 
        md-clearable 
        v-show="btnSelect ==='signup'" 
        :class="{'md-invalid' : !confirmPasswordValid}">
        <label>Confirmer le Mot de Passe</label>
        <md-input
          v-model="user.confirmPassword" 
          type="password"></md-input>
        <span class="md-error errors" v-if="!user.confirmPassword">Confirmation du Mot de passe requis</span>
      </md-field>

      <button type="submit" class="btn-connection">Se connecter</button>
      <p style="marginTop: 30px; color: red">{{errors}}</p>

    </form>
  </div>
</template>

<script>
  export default {
    data(){
      return{
        errors: null,
        usernameValid: true,
        passwordValid: true,
        confirmPasswordValid: true,
        user : {
          username:'',
          password:'',
          confirmPassword: ''
        },
        btnSelect: 'signin'
      }
    },
    watch:{
      btnSelect(){
        this.usernameValid = true;
        this.passwordValid = true;
        this.confirmPasswordValid = true;
        this.user.username = '';
        this.user.password = '';
        this.user.confirmPassword = '';
        this.errors = null;
      }
    },
    methods:{
      registerOrLogin(strategy){
        if(this.checkForm()){
          this.$store.dispatch(strategy, {
          username: this.user.username,
          password : this.user.password
        })
        .catch( (error) => { 
          this.errors = error;
        })
      }
      },
      checkForm(){
        if (this.btnSelect === 'signin'){
          if(!this.user.username || !this.user.password ){
            this.usernameValid = false;
            this.passwordValid = false;
            return false;
          }
          return true;
        } else if (this.btnSelect === 'signup'){
          if(!this.user.username || !this.user.password || !this.user.confirmPassword){
            this.usernameValid = false;
            this.passwordValid = false;
            this.confirmPasswordValid = false;
            return false;
          }
          return true;
        }
      }
    }
  }
</script>

<style scoped>
  #Login{
    display: flex;
    flex-direction: column;
    margin: auto;
    position: relative;
    padding: 20px;
    max-width: 500px;
  }

  form{
    margin: 0 auto;
    width: 70%;
    min-height: 320px;
  }

  .md-field {
    margin: 30px 0px;
  }

  .md-field:after{
    border: 0.5px solid grey;
  }

  .menu-btn{
    display: flex;
    justify-content: space-between;
    color: #9670bd;
    font-weight: 600;
  }

  .btn-connection{
    position: absolute;
    bottom: 30px;
    background-color: #37cce5;
    border: none;
    border-radius: 15px;
    padding: 6px 19px;
    color: #fff;
    width: 60%;
    margin: auto;
    margin-top: 75px;
    align-self: center;
  } 

  button{
    border: none;
    background-color: transparent;
    cursor: pointer;
    color: #9670bd;
    font-weight: 900;
    font-size: 20px;
  }

  .errors{
    color: red;
    margin-top: 20px;
  }

  .highlighted{
    border-bottom: 2px solid #9670bd;
  }

</style>
