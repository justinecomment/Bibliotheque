<template>
  <div id="Navigation">

    <i class="fas fa-bars" @click="openNav = false" v-if="burgerIcon"></i>
    <app-nav-item v-if="menuIsOpen"></app-nav-item>
    <hr>

    <div class="burgerNav" v-if="!openNav && burgerIcon">
      <i @click="openNav = true" class="fas fa-times"></i>
      <app-nav-item v-if="!menuIsOpen"></app-nav-item>
    </div>

  </div>
</template>

<script>
import NavItem from './Navigation-item';

export default {
  data(){
    return{
      burgerIcon: true,
      menuIsOpen: false,
      openNav: true
    }
  },
  components:{
    appNavItem: NavItem
  },
  created(){
    window.addEventListener('resize', this.handleResize);
    this.handleResize();
  },
  methods:{
    handleResize(){
      if(window.innerWidth <= 600){
        this.burgerIcon = true;
        this.menuIsOpen = false;
      } else{
        this.burgerIcon = false;
        this.menuIsOpen = true;
      }
    }
  }
}
</script>

<style scoped>
  #Navigation{
    display: flex;
    flex-direction: column;
  }

  span, i{
    cursor: pointer;
  }

  .burgerNav{
    background-color: #7e49b5;
    width: 100%;
    margin-left: -50px;
    margin-top: -9px;
    position: absolute;
    padding: 0;
    z-index: 2;
  }

  hr{
    border: 0.5px solid #fff;
    width: 100%;
  }
</style>


