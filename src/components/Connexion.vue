<template>
  <div id="Connexion">
    <form @submit.prevent="checkForm" >
      <div class="menu-btn">
        <button @click="btnSelected('connexion')">Connexion</button>
        <button @click="btnSelected('creer')">Créer un compte</button>
      </div>
      <md-field md-clearable>
        <label>Pseudo</label>
        <md-input v-model="formData.pseudo"></md-input>
      </md-field>
      <md-field md-clearable>
        <label>Mot de Passe</label>
        <md-input v-model="formData.password"></md-input>
      </md-field>

      <md-field md-clearable v-show="btnSelect ==='creer'">
        <label>Confirmer le Mot de Passe</label>
        <md-input v-model="formData.confirmPassword"></md-input>
      </md-field>

      <button class="btn-connection" type="submit">Se connecter</button>
      <p v-if="errors.length">{{errors}}</p>
    </form>
  </div>
</template>

<script>
import Services from "../services/services";

  export default {
    data(){
      return{
        errors: [],
        formData:{
          pseudo: null,
          password: null,
          confirmPassword: null,
        },
        btnSelect: ''
      }
    },
    methods:{
      btnSelected(btn){
        this.btnSelect = btn;
      },
      checkForm(e){
        if (this.formData.pseudo && this.formData.password && !this.formData.confirmPassword){
          // console.log(this.formData.pseudo + ', ' + this.formData.password)
          Services.login(this.formData);
        } else{
          this.errors.push('error')
        }
      }
    }
  }
</script>

<style scoped>
  #Connexion{
    display: flex;
    flex-direction: column;
    background-color: #fff;
    position: relative;
    border-radius: 2px;
    padding: 20px;
    box-shadow: 2px 2px #cdcdcd;
    max-width: 500px;
    min-height: 300px;
    width: 100%;
    margin-top: -25px;
  }

  form{
    margin: 0 auto;
    width: 70%;
  }

   .md-field:after, .md-field:before{
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

  .md-field {
    margin: 0px 0px;
  }

  button{
    border: none;
    background-color: transparent;
    cursor: pointer;
    color: #9670bd;
    font-weight: 900;
    font-size: 20px;
  }

</style>
