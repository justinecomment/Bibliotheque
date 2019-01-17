<template>
  <div id="Navigation">
      <div>
        <b-dropdown text="Ajouter" variant="link text-white" class="ajouter">
          <b-dropdown-item>Livre</b-dropdown-item>
          <b-dropdown-item>Auteur</b-dropdown-item>
          <b-dropdown-item>Collection</b-dropdown-item>
          <b-dropdown-item>Amis</b-dropdown-item>
        </b-dropdown>
      </div>

      <router-link to="/livres" class="livre">Livres</router-link>
      <router-link to="" class="empty" />
      <router-link to="" class="user"><i class="fas fa-user"></i></router-link>
      <router-link to="" class="connexion">Connexion</router-link>
      <router-link to=""><img src="../assets/img/drapeau-francais.jpg" class="drapeau" /></router-link>

    <hr>
  </div>
</template>

<script>

export default {
}
</script>

<style scoped>
  #Navigation{
    display: flex;
    align-items: center;
    color: #fff;
    padding: 0;
    margin: 0;
    margin-bottom: -5px;
  }

  a{
    padding: 12px 18px;
    cursor: pointer;
  }

  .livre{
    color: #fff;
  }

  .ajouter:hover, .livre:hover{
    background-color: #7792df;
  }

  .drapeau{
    width: 20px;
  }

  .connexion{
    background-color: #37cce5;
    border-radius: 26px;
    padding: 3px 12px;
  }

  .user{
    color: #37cce5;
  }

  .empty{
    flex: 1;
  }

  .ajouter i{
    margin: 0px 10px;
  }

  hr{
    border: 0.5px solid white;
  }
</style>


