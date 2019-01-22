<template>
  <div id="Nav-item">
    <div class="item" v-for="(Data, index) in data" :key="index">

      <router-link to="" @click.native="openDropDown(index)">{{Data.name}}</router-link>
      <div class="dropdown" v-if="showItems">
        <router-link to="" v-for="(subMenu, index) in Data.subMenus" :key="index">{{subMenu.name}}</router-link>
      </div>

      <!-- <router-link to="/livres" class="livre">Livres</router-link>
      <router-link to="" class="empty" />

      <div>
        <b-dropdown variant="link text-white" class="item">
            <template slot="button-content">
            <span class="fas fa-user"></span>
          </template>
          <b-dropdown-item><router-link to="/dashboard">Dashboard</router-link></b-dropdown-item>
          <b-dropdown-item>Mes livres</b-dropdown-item>
          <b-dropdown-item>Mes collections</b-dropdown-item>
          <b-dropdown-item>Mes amis</b-dropdown-item>
        </b-dropdown>
      </div>
      
      <router-link to="/connexion" class="connexion">Connexion</router-link>

      <b-dropdown variant="link text-white" class="item">
          <template slot="button-content">
          <span ><img src="../assets/img/drapeau-francais.jpg" class="drapeau" /></span>
        </template>
        <b-dropdown-item><img src="../assets/img/drapeau-anglais.jpg" class="drapeau" /></b-dropdown-item>
      </b-dropdown> -->
    </div>
    <hr>

  </div>
</template>


<script>
export default {
  data(){
    return{
      showItems: false,
      data:[
        {name: "Ajouter", subMenus: 
          [
            {name: 'Livre'},
            {name: 'salut'},
            {name: 'juju'}
          ]
        },
        {name: 'Livres'},
        {name: 'Justine', subMenus:
          [
            { name: "coucou"}
          ]
        },
      ]
    }
  },
  methods:{
    openDropDown(index){
      if(this.data[index].subMenus){
        this.showItems = !this.showItems;
      }
    } 
  }
}
</script>

<style scoped>
  #Nav-item{
    display: flex;
  }

  .item{
    display: flex;
    flex-direction: row;
    margin: 0px 10px;
    width: 50px;
  }

  .dropdown{
    display: flex;
    flex-direction: column;
    background-color:lightgrey;
    padding: 10px;
    position: absolute;
    top: 40px;
  }

  a{
    cursor: pointer;
  }

  /* .dropdown-item{
    color: #898989;
  }

  .dropdown-item:hover{
    background-color: #fadad6;
  }

  section >a{
    cursor: pointer;
    display: flex;
    align-items: center;
    color: #fff;
  }

  .livre{
    padding: 0px 18px;
  }

  .item:hover, .livre:hover{
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
  } */

  hr{
    /* border: 0.5px solid #fff;
    width: 100%; */
  }

  @media screen and (max-width: 600px) {

  }


</style>

