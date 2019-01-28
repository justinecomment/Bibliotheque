<template>
  <div id="Books">
    <section>
      <i class="fas fa-search"></i>
      <input placeholder="Rechercher un livre" value="" />
    </section>
    <section>
      <b-table hover :items="books" :fields="fields"></b-table>
    </section>
  </div>
</template>

<script>
export default {
  data(){
    return {
      fields: {
        nom: {
          label: 'Nom',
          sortable: true
        },
        couverture: {
          label: 'Couverture',
          sortable: false
        },
        auteur: {
          label: 'Auteur',
          sortable: true
        },
        résumé: {
          label: 'Résumé',
          sortable: true
        },
        format: {
          label: 'Format',
          sortable: true
        }
      }
    }
  },
  created(){
    return this.$store.dispatch('initBooks');
  },
  computed:{
    books(){
      return this.$store.getters.books;
    }
  }
}
</script>

<style lang="scss" scoped>
  #Books{
    background-color: #fff;
    min-height: 500px;
    min-width: 800px;
    box-shadow: 2px 2px #cdcdcd;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  section:nth-child(1){
    background-color: #e6e6e6;
    color: #bebebe;
    display: flex;
    width: 100%;
    align-items: center;
    justify-content: center;
    padding: 10px 0px;
  }

  section:nth-child(2){
    width: 100%;
  }

  input{
    border: none;
    background-color: transparent;
    padding-left: 10px;
  }

  table{
    color: #848484;
  }
</style>

