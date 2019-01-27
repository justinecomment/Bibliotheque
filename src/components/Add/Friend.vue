<template>
  <div>
    <appAdd :myEntity="friend" :myTitle="titleFriend"></appAdd>
  </div>
</template>

<script>
import Add from './Add.vue';

export default {
  components:{
    appAdd: Add
  },
  data(){
    return{
      titleFriend: "Ajouter un auteur",
      friend: [
        {name: 'Nom Ami', value: ''}
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
  
</style>