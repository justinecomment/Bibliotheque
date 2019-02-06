<template>
  <div id="Books">
    <section>
      <i class="fas fa-search"></i>
      <input placeholder="Rechercher un livre" value="" />
    </section>

    <section>
      <md-table v-model="books" md-card @md-selected="onSelect">
        <md-table-toolbar></md-table-toolbar>
        
        <md-table-toolbar slot="md-table-alternate-header" slot-scope="{ count }">
          <div class="md-toolbar-section-start">{{ getAlternateLabel(count) }}</div>

          <div class="md-toolbar-section-end">
            <md-button>
              <md-icon>delete</md-icon>
            </md-button>
            <router-link :to="{name: 'AddBook'}">
              <md-button><md-icon>edit</md-icon></md-button>
            </router-link>
            <md-button>
              <md-icon>share</md-icon>
            </md-button>
          </div>
        </md-table-toolbar>

        <md-table-row slot="md-table-row" slot-scope="{ item }"  md-selectable="multiple" md-auto-select>
          <md-table-cell md-label="Nom" md-sort-by="nom">{{ item.nom }}</md-table-cell>
          <md-table-cell md-label="Auteur" md-sort-by="auteur">{{ item.auteur }}</md-table-cell>
          <md-table-cell md-label="Format" md-sort-by="format">{{ item.format }}</md-table-cell>
          <md-table-cell md-label="Couverture" md-sort-by="couverture">{{ item.couverture }}</md-table-cell>
        </md-table-row>
      </md-table>
    </section>

  </div>
</template>

<script>
export default {
  data(){
    return {
      selected: [],
    }
  },
  created(){
    return this.$store.dispatch('initBooks');
  },
  computed:{
    books(){
      return this.$store.getters.books;
    }
  },
  methods:{
    onSelect (items) {
        this.selected = items
    },
    getAlternateLabel (count) {
      let plural = ''
      count > 1 ? plural = 's' : plural = '';
      return `${count} livre${plural} selectionné${plural}`
    }
  }
}

</script>

<style lang="scss" scoped>
  #Books{
    background-color: #fff;
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

  .md-table + .md-table {
    margin-top: 16px
  }

</style>

