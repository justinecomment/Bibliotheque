<template>
  <div id="Nav-item">
    <div class="item">
      
      <span v-if="!auth">
        <router-link :to="{name: 'Books'}">Livres</router-link>
      </span>
      <span v-if="!auth">
        <router-link :to="{name: 'Authors'}">Auteurs</router-link>
      </span>
      <span class="empty">
        <router-link to=""></router-link>
      </span>
      <span v-if="!auth" @click="OpenDropdown">
        <router-link to="">
          <i class="fas fa-user"></i>{{username}}
          <i class="fa fa-caret-down"></i>
        </router-link>
        <div class="dropdownContent" v-if="!auth && showDropdown" >
          <router-link :to="{name: 'UserDashboard'}" v-click-outside="closeDropdown">Dashboard</router-link>
          <router-link :to="{name: 'UserBook'}" v-click-outside="closeDropdown">Mes livres</router-link>
          <router-link :to="{name: 'UserCollections'}" v-click-outside="closeDropdown">Mes Collections</router-link>
          <router-link :to="{name: 'UserFriends'}" v-click-outside="closeDropdown">Mes Amis</router-link>
        </div>
      </span>

      <span class="login" v-if="auth">
        <router-link :to="{name: 'Login'}">Connexion</router-link>
      </span>
      <span v-if="!auth">
        <router-link to="">
          <img src="../../assets/img/drapeau-francais.jpg" class="imageNav" />
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
import services from '../../services/services';
import ClickOutside from 'vue-click-outside'

export default {
  data(){
    return{
      mobile : false,
      showDropdown: false
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
    },
    OpenDropdown(e){
      this.showDropdown = true;
    },
    closeDropdown(){
      this.showDropdown = false;
    }
  },
  directives: {
    ClickOutside
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

  span > a{
    cursor: pointer;
    color: $colorNav !important;
    
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

