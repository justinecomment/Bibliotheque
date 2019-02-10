<template>
  <div id="app">
    <div class="header">
      <app-navigation></app-navigation>
      <router-link :to="{name: 'Home'}">Bibliotheque</router-link>
    </div>
    
    <div class="allContent">
      <router-view ></router-view>
    </div>
  </div>
</template>

<script>
import Navigation from './components/Navigation/Navigation.vue';

export default {
  components:{
    appNavigation: Navigation
  },
  created () {
    this.$store.dispatch('tryAutoLogin');
    this.$store.dispatch('initBooks');
    this.$store.dispatch('initAuthors');
    this.$store.dispatch('initUserBooks');
  }
}
</script>

<style lang="scss">
  body{
    font-family: Calibri , Arial;
    background-image: url(./assets/img/fond.jpg);
    background-repeat: no-repeat;
    background-size: contain;
    background-color: #eef0f5;
  }

  .header #Navigation{
    margin: 0px 40px;
  }

  .header{
    position: relative;
    display: flex;
    flex-direction: column;
  }

  .header > a{
    top: 100px;
    font-size: 25px;
    text-decoration: none;
    color: #fff !important;
    text-align: center;
  }

  .allContent{
    margin-top: 12%;
    background-color: #fff;
    border-radius: 8px;
    box-shadow: 2px 2px 0px #cbcbcb;
    margin-left: 10%;
    margin-right: 10%;
    padding: 20px;
  }

  @media only screen and (max-width: 600px) {
    .allContent{
      position: initial;
      margin-top: 50px;
    }

    header{
      font-size: 3em;
    }
  }
  


</style>
