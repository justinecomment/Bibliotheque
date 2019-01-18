<template>
  <div id="app">
    <div class="header"></div>
    <img src="./assets/img/header.jpg" />
    <app-navigation></app-navigation>
    <router-link to="/" class="title">Bibliotheque</router-link>
    <p>Blablabla</p>

    <router-view></router-view>
  </div>
</template>

<script>
import Navigation from './components/Navigation.vue';

export default {
  components:{
    appNavigation: Navigation
  }
}
</script>

<style lang="scss">
  body{
    margin: 0;
    padding: 0;
    font-family: Calibri , Arial;
    background-color: #eef0f5;
  }

  #app{
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  a{
    text-decoration: none;
  }

  .title, p{
    position: absolute;
    width: 100%;
    text-align: center;
    color: white;
  }

  .title{
    top: 100px;
    font-size: 25px;
  }

  p{
    top: 140px;
  }

  #Navigation{
    position: absolute;
    top: 8px;
    width: 100%;
    padding: 0px 50px;
    box-sizing: border-box;
  }

  @media screen and (max-width: 250px) {
    img{
      width: 100%;
    }
  }

</style>
