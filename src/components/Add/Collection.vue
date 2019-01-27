<template>
  <div>
    <appAdd :myEntity="collection" :myTitle="titleCollection"></appAdd>
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
      titleCollection: "Ajouter un auteur",
      collection: [
        {name: 'Nom Collection', value: ''}
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
  
</style>