<template>
  <div>
    <appAdd :myEntity="book" :myTitle="bookTitle"></appAdd>
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
      bookTitle: "Ajouter un livre",
      book: [
        {name: 'Nom', value: ''},
        {name: 'Format', value: ''},
        {name: 'Auteur', value: ''},
        {name: 'Résumé', value: ''},
        {name: 'Style', value: ''},
        {name: 'Couverture', value: ''}
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
  
</style>