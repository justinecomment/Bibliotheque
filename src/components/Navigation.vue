<template>
  <div id="Navigation">
    <section>
      <b-dropdown text="Ajouter" variant="link text-white" class="ajouter">
        <b-dropdown-item>Livre</b-dropdown-item>
        <b-dropdown-item>Auteur</b-dropdown-item>
        <b-dropdown-item>Collection</b-dropdown-item>
        <b-dropdown-item>Amis</b-dropdown-item>
      </b-dropdown>

      <router-link to="/livres" class="livre">Livres</router-link>
      <router-link to="" class="empty" />

      <div>
        <b-dropdown variant="link text-white" class="ajouter">
            <template slot="button-content">
            <span class="fas fa-user"></span>
          </template>
          <b-dropdown-item>Dashboard</b-dropdown-item>
          <b-dropdown-item>Mes livres</b-dropdown-item>
          <b-dropdown-item>Mes collections</b-dropdown-item>
          <b-dropdown-item>Mes amis</b-dropdown-item>
        </b-dropdown>
      </div>
      
      <router-link to="/connexion" class="connexion">Connexion</router-link>

      <b-dropdown variant="link text-white" class="ajouter">
          <template slot="button-content">
          <span ><img src="../assets/img/drapeau-francais.jpg" class="drapeau" /></span>
        </template>
        <b-dropdown-item><img src="../assets/img/drapeau-anglais.jpg" class="drapeau" /></b-dropdown-item>
      </b-dropdown>
    </section>

    <section>
      <hr>
    </section>

  </div>
</template>

<script>

export default {
}
</script>

<style scoped>
 section{
    display: flex;
  }

  a{
    cursor: pointer;
    display: flex;
    align-items: center;
  }

  .livre:hover{
    text-decoration: none;
  }

  .livre{
    color: #fff;
    padding: 0px 18px;
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
    color: #fff;
  }

  .user{
    color: #37cce5;
  }

  .empty{
    flex: 1;
  }

  hr{
    border: 0.5px solid #fff;
    width: 100%;
  }
</style>


