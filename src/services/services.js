import Vue from 'vue';

export default {
  isMobile(){
    if(window.innerWidth <= 600){
      return true;
    } 
    return false;
  }
}