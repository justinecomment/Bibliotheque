<template>
  <div id="Nav-item">

    <div v-for="(entry, index) in NavigationItem" 
        @click="clickHandle(index)" 
        :key="index"
        :class="{ navItem : entry.name !== 'Connexion' && entry.name !== '' && entry.name !== 'empty' && !mobile, 
                  empty: entry.name === 'empty',
                   }">
      <div class="item">
        <i :class="entry.iconBefore"></i>
        <router-link 
          :class="{connexion : entry.name === 'Connexion'}" 
          :to="entry.to" 
          v-if="entry.name !== 'empty'">{{entry.name}}</router-link>
        <img v-if="entry.image" class="imageNav" :src="require( `../assets/img/${entry.image}.jpg`)"/>
        <i :class="entry.iconAfter"></i>
      </div>

        <div v-if="selectedIndex(index) && entry.subMenus.length" :class="{'dropdown-item': !mobile, 'dropdown-mobile': mobile}">
          <div v-for="(elt, eltIndex) in entry.subMenus" :key="eltIndex">
            <router-link :to="elt.to">{{elt.name}}</router-link>
            <img v-if="elt.image" class="imageNav" :src="require( `../assets/img/${elt.image}.jpg`)"/>
          </div>
        </div>

    </div>
    
  </div>
</template>


<script>
import NavigationItem from '../data/Navigation-item';
import services from '../services/services';

export default {
  data(){
    return{
      currentIndex: null,
      NavigationItem: NavigationItem,
      mobile : false
    }
  },
  created(){
    window.addEventListener('resize', services.isMobile);
    if(services.isMobile){
      this.mobile = true;
    } else {
      this.mobile = false;
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

  .navItem{
    display: flex;
    flex-direction: row;
  }

  .navItem:hover{
    background-color: $colorNavHover;
  }

  .item{
    display: flex;
    padding: 10px;
    cursor: pointer;
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

  .connexion{
    background-color: #37cce5;
    padding: 10px;
  }

  .connexion:hover{
    background-color: #16bbd7;
  }

  .empty{
    flex: 1;
  }


  @media screen and(max-width: 600px){
    #Nav-item{
      flex-direction: column;
    }
  }

</style>

