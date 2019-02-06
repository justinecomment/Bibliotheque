<template>
  <div id="Nav-item">
    <div class="item">
      <span v-if="!auth" @click="showDropdownAdd = !showDropdownAdd">
        <i class="fa fa-plus"></i>
        <router-link to="">Ajouter</router-link>
        <i class="fa fa-caret-down"></i>
        <div class="dropdownContent" v-if="!auth && showDropdownAdd" >
          <router-link :to="{name: 'AddBook'}"><i class="fas fa-plus"></i>Livre</router-link>
          <router-link :to="{name: 'AddAuthor'}"><i class="fas fa-plus"></i>Auteur</router-link>
          <router-link :to="{name: 'AddCollection'}"><i class="fas fa-plus"></i>Collection</router-link>
          <router-link :to="{name: 'AddFriend'}"><i class="fas fa-plus"></i>Amis</router-link>
        </div>
      </span>
      
      <span v-if="!auth">
        <router-link to="/books">Livres</router-link>
      </span>
      <span class="empty">
        <router-link to=""></router-link>
      </span>
      <span v-if="!auth" @click="showDropdownUser = !showDropdownUser">
        <router-link to="">
          <i class="fas fa-user"></i>{{username}}
          <i class="fa fa-caret-down"></i>
        </router-link>
        <div class="dropdownContent" v-if="!auth && showDropdownUser" >
          <router-link to="/Dashboard">Dashboard</router-link>
          <router-link to="">Mes livres</router-link>
          <router-link to="">Mes Collection</router-link>
          <router-link to="">Mes Amis</router-link>
        </div>
      </span>

      <span class="login" v-if="auth">
        <router-link to="/login">Connexion</router-link>
      </span>
      <span v-if="!auth">
        <router-link to="">
          <img src="../assets/img/drapeau-francais.jpg" class="imageNav" />
          <i class="fa fa-caret-down"></i>
        </router-link>
      </span>
      <span v-if="!auth">
        <router-link @click.native="logout" to="">
          <i class="fas fa-power-off"></i>
        </router-link>
      </span>
    </div>
  </div>
</template>


<script>
import services from '../services/services';

export default {
  data(){
    return{
      mobile : false,
      showDropdownAdd: false,
      showDropdownUser: false
    }
  },
  created(){
    window.addEventListener('resize', this.isMobile);
    this.isMobile();
  },
  computed:{
    auth(){
      return this.$store.getters.isAuthenticated;
    },
    username(){
      return this.$store.getters.user;
    }
  },
  methods:{    
    isMobile(){
      if(services.isMobile()){
        this.mobile = true;
      } else {
        this.mobile = false;
      }
    },
    logout() {
      this.$store.dispatch('logout').catch((error)=>{ console.log(error) })
    }
  }
}
</script>

<style lang="scss" scoped>

  $colorNav : #fff;
  $colorNavHover : #7792df;
  $colorDropdownHover: #fadad6;

  #Nav-item{
    display: flex;
    align-items: center;
  }

  span{
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 10px;
    position: relative;
    color: #fff;
  }

  span:hover{
    background-color: $colorNavHover;
  }

  .empty{
    flex: 1;
  }

  .item{
    display: flex;
    padding-top: 10px;
    cursor: pointer;
    width: 100%;
  }

  .dropdown-item{
    display: flex;
    flex-direction: column;
    position: absolute;
    top: 40px;
    z-index:1;
    width: 20%;
    background-color: #eef0f5;
  }

  .dropdown-mobile{
    text-align: center;
    margin-bottom:20px;
    font-size: 11px;
  }

  .dropdown-item > div{
    padding: 10px;
  }

  .dropdown-item a{
    color: #5d5d5d;
    padding: 8px;
  }

  .dropdown-item a:hover{
    color: #cd8d88;
  }

  a{
    cursor: pointer;
    color: $colorNav;
  }

  a:hover{
    text-decoration: none;
  }

  i{
    margin: 0px 8px;
    color: $colorNav;
  }

  .imageNav{
    width: 24px;
    height: 17px;
  }

  .login{
    background-color: #37cce5;
    padding: 10px;
  }

  .login:hover{
    background-color: #16bbd7;
  }

  .dropdownContent{
    flex-direction: column;
    display: flex;
    background-color: #eef0f5;
    top: 32px;
    position: absolute;
    margin: 13px 5px;
    padding: 0px 16px;
    min-width: 154px;
    min-height: 93px;
    z-index: 2;
  }

  .dropdownContent a, .dropdownContent i{
    color: #898989;
  }

  .dropdownContent a{
    margin: 10px 0px;
  }


  @media screen and(max-width: 600px){
    #Nav-item{
      flex-direction: column;
    }
  }

</style>

