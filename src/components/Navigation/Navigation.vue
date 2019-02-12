<template>
  <div id="Navigation">

    <app-nav-item v-if="!mobile"></app-nav-item>

    <md-toolbar v-else class="md-primary" md-elevation="0">
      <div class="md-toolbar-section-start" @click="openMenu = !openMenu">
        <md-button class="md-icon-button" >
          <md-icon>menu</md-icon>
        </md-button>
         <span class="md-title">Bibliotheque</span>
      </div>
      <div class="md-toolbar-row md-toolbar-offset md-primary">
        <app-nav-item v-if="openMenu" @click.native="openMenu = false"></app-nav-item>
      </div>
    </md-toolbar>

  </div>
</template>

<script>
import NavItem from './Navigation-item';
import services from '../../services/services';

export default {
  data(){
    return{
      openMenu : false,
      mobile : false
    }
  },
  components:{
    appNavItem: NavItem
  },
  created(){
    window.addEventListener('resize', () =>{
      services.isMobile()? this.mobile = true : this.mobile = false;
    });
    this.isMobile();
  },
  methods:{
    isMobile(){
      services.isMobile() ? this.mobile = true: this.mobile = false;
    }, 
  }
}
</script>

<style lang="scss" scoped>
  #Navigation{
    display: flex;
    flex-direction: column;
  }
</style>


