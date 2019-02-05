<template>
  <div id="Nav-item">
    <div class="item" @click="clickHandle">
      <span v-if="!auth">
        <i class="fa fa-plus"></i>
        <router-link to="">Ajouter</router-link>
        <i class="fa fa-caret-down"></i>
      </span>
      <span v-if="!auth">
        <router-link to="/books">Livres</router-link>
      </span>
      <span class="empty">
        <router-link to=""></router-link>
      </span>
      <span v-if="!auth">
        <router-link to="">
          <i class="fas fa-user"></i>
          <i class="fa fa-caret-down"></i>
        </router-link>
      </span>
        <span class="login">
        <router-link to="/login">Connexion</router-link>
      </span>
      <span v-if="!auth">
        <router-link to="">
          <img src="../assets/img/drapeau-francais.jpg" class="imageNav" />
          <i class="fa fa-caret-down"></i>
        </router-link>
      </span>
      <span v-if="!auth">
        <router-link @click.native="logout" to="">Déconexion</router-link>
      </span>
    </div>

    <!-- <div v-if="selectedIndex()" 
         :class="{'dropdown-item': !mobile, 'dropdown-mobile': mobile}">
      <router-link :to="elt.to">{{elt.name}}</router-link>
    </div> -->

  </div>
</template>


<script>
import services from '../services/services';

export default {
  data(){
    return{
      currentIndex: null,
      mobile : false
    }
  },
  created(){
    window.addEventListener('resize', this.isMobile);
    this.isMobile();
  },
  computed:{
    auth(){
      return this.$store.getters.isAuthenticated;
    }
  },
  methods:{    
    selectedIndex(index){
      if(index === this.currentIndex){
        return true;
      }
      return false;   
    },
    clickHandle(index){
      if(this.currentIndex === index){
        this.currentIndex = null;
      } else{
        this.currentIndex = index;
      }
    },
    isMobile(){
      if(services.isMobile()){
        this.mobile = true;
      } else {
        this.mobile = false;
      }
    },
    logout() {
      this.$store.dispatch('logout')
        .catch((error)=>{ console.log(error) })
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
  }

  span:hover{
    background-color: $colorNavHover;
  }

  .empty{
    flex: 1;
  }

  .item{
    display: flex;
    padding: 10px;
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


  @media screen and(max-width: 600px){
    #Nav-item{
      flex-direction: column;
    }
  }

</style>

