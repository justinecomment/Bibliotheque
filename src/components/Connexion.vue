<template>
  <div id="Connexion">
    <div class="button">
      <h5>Connexion</h5>
      <h5>Creer un compte</h5>
    </div>

    <md-field md-clearable>
      <label>Pseudo</label>
      <md-input v-model="pseudo"></md-input>
    </md-field>
    <md-field md-clearable>
      <label>Mot de Passe</label>
      <md-input v-model="password"></md-input>
    </md-field>

    <button>Se connecter</button>
  </div>
</template>

<script>
export default {
  data: () => ({
      pseudo: null,
      password: null
    })
}
</script>

<style scoped>
  #Connexion{
    background-color: #fff;
    border-radius: 2px;
    padding: 7% 5%;
    box-shadow: 2px 2px #cdcdcd;
    display: flex;
    flex-direction: column;
    width: 400px;
    /* margin: 4% 100%; */
  }

   .md-field:after, .md-field:before{
    border: 0.5px solid grey;
  }

  .button{
    display: flex;
    justify-content: space-between;
    color: #9670bd;
    font-weight: 600;
  }

  button{
    background-color: #37cce5;
    border: none;
    border-radius: 15px;
    padding: 6px 19px;
    color: #fff;
    width: 60%;
    margin: auto;
    margin-top: 20px;
  } 

</style>
