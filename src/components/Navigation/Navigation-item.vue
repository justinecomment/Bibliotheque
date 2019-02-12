<template>
  <div id="Nav-item">
    <div class="item" :class="{mobile: mobile}">
      
      <span v-if="!auth">
        <router-link :to="{name: 'Books'}">Livres</router-link>
      </span>

      <span v-if="!auth">
        <router-link :to="{name: 'Authors'}">Auteurs</router-link>
      </span>

      <span class="empty">
        <router-link to=""></router-link>
      </span>

      <span v-if="!auth" @click="showDropdown = true">
        <router-link to="">
          <i class="fas fa-user"></i>{{username}}
          <i class="fa fa-caret-down"></i>
        </router-link>
        <div class="dropdownContent" v-if="!auth && showDropdown" :class="{dropDownMobile: mobile}" >
          <router-link 
            :to="{name: 'UserDashboard'}" 
            v-click-outside="closeDropdown" 
            :class="{dropDownMobile: mobile}">Dashboard</router-link>
          <router-link 
            :to="{name: 'UserBook'}" 
            v-click-outside="closeDropdown" 
            :class="{dropDownMobile: mobile}">Mes livres</router-link>
          <router-link 
            :to="{name: 'UserCollections'}" 
            v-click-outside="closeDropdown" 
            :class="{dropDownMobile: mobile}">Mes Collections</router-link>
          <router-link 
            :to="{name: 'UserFriends'}" 
            v-click-outside="closeDropdown" 
            :class="{dropDownMobile: mobile}">Mes Amis</router-link>
        </div>
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
    window.addEventListener('resize', () =>{
      services.isMobile() ? this.mobile = true : this.mobile = false;
    });
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

  #Nav-item{
    display: flex;
    width: 100%;

    .item{
      display: flex;
      padding-top: 10px;
      cursor: pointer;
      width: 100%;
    }

    .mobile{
      flex-direction: column;
    }

    span{
      padding: 10px;
      position: relative;
    }

    .empty{
      flex: 1;
    }

    span > a{
      cursor: pointer;
      color: $colorNav !important;
    }

    a{
      text-decoration: none;
      color: #898989;
    }

    i{
      margin: 0px 8px;
      color: $colorNav;
    }

    .imageNav{
      width: 24px;
      height: 17px;
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

      & a{
        margin: 10px 0px;
      }
    }

    .dropDownMobile{
      position: initial;
      background-color: transparent;
      color: #fff;
      min-width: 100%;
      min-height: 100%;
      margin: 0px;
      padding: 0px;

    }
  }

  

</style>

