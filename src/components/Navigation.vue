<template>
  <div id="Navigation">
    
    <div class="burgerNav" v-if="!openBurger">
      <app-nav-item></app-nav-item>
      <button @click="openBurger = true">close</button>
    </div>

    <button @click="openBurger = false" v-if="burgerIcon">Burger</button>
    <app-nav-item v-if="menuIsOpen"></app-nav-item>
  </div>
</template>

<script>
import NavItem from './Navigation-item';

export default {
  data(){
    return{
      burgerIcon: true,
      menuIsOpen: false,
      openBurger: true
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
  }

  span{
    cursor: pointer;
  }

  .burgerNav{
    background-color: red;
    width: 100%;
    height: 100px;
    margin-left: -50px;
    margin-top: -9px;
    position: absolute;
    padding: 0;
  }

</style>


