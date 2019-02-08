<template>
  <div id="Books">
    <h6>Livres</h6>

    <b-button @click="openModal" variant="link">
      <i class="fas fa-plus iconAdd" v-b-tooltip.hover title="Ajouter un livre"></i>
    </b-button>
    <!-- MODAL -->
    <b-modal v-model="modalShow" ref="myModalRef" hide-footer>
      <div class="d-block text-center">
        <h6>Ajouter un livre</h6>
      </div>
      <app-Book-Add v-on:closeModal="hideModal" :modalShow="modalShow"></app-Book-Add>
    </b-modal>
    <!-- -->
    
    <section class="sectionSearch">
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
            <router-link :to="{name: 'BookAdd'}">
              <md-button><md-icon>edit</md-icon></md-button>
            </router-link>
            <md-button>
              <md-icon>share</md-icon>
            </md-button>
            <md-button>
              <md-icon>add</md-icon>
              <md-tooltip md-direction="top">Ajouter à mes livres</md-tooltip>
            </md-button>
          </div>
        </md-table-toolbar>

        <md-table-row slot="md-table-row" slot-scope="{ item }"  md-selectable="multiple" md-auto-select>
          <md-table-cell md-label="Nom" md-sort-by="nom">{{ item.name }}</md-table-cell>
          <md-table-cell md-label="Auteur" md-sort-by="auteur">{{ item.author }}</md-table-cell>
          <md-table-cell md-label="Format" md-sort-by="format">{{ item.format }}</md-table-cell>
          <md-table-cell md-label="Couverture" md-sort-by="couverture">{{ item.resume }}</md-table-cell>
        </md-table-row>
      </md-table>
    </section>

  </div>
</template>

<script>
import BookAdd from './BookAdd.vue';

export default {
  data(){
    return {
      selected: [],
      modalShow: false
    }
  },
  components:{
    AppBookAdd: BookAdd
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
    },
    openModal () {
      this.modalShow = true;
    },
    hideModal () {
      this.modalShow = false;
    }
  }
}

</script>

<style lang="scss" scoped>
  #Books{
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .sectionSearch{
    background-color: #eaeaea;
    color: #bebebe;
    display: flex;
    width: 100%;
    align-items: center;
    justify-content: center;
    padding: 10px 0px;
  }

  section{
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

  .iconAdd i, .iconAdd{
    color: #37cce5 !important;
    font-weight: bold;
    font-size: 30px;
  }

  h6{
    color: #aa87cb;
    font-weight: bold;
    text-transform: uppercase;
  }


</style>

