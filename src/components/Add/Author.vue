<template>
  <div>
    <appAdd :myEntity="author" :myTitle="titleAuthor"></appAdd>
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
      titleAuthor: "Ajouter un auteur",
      author: [
        {name: 'Nom', value: ''}
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
  
</style>