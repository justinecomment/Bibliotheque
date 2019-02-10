<template>
  <div id="Books">
    <h6>Livres</h6>

    <b-button @click="openModal = true" variant="link">
      <i class="fas fa-plus iconAdd" v-b-tooltip.hover title="Ajouter un livre"></i>
    </b-button>

    <!-- MODAL -->
    <b-modal v-model="openModal" ref="myModalRef" hide-footer style="z-index: 2">
      <div class="d-block text-center">
        <h6>Ajouter un livre</h6>
      </div>
      <app-Book-Add @onclosemodal="jeferme" :open-modal="openModal"></app-Book-Add>
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
          </div>
        </md-table-toolbar>

        <md-table-row slot="md-table-row" slot-scope="{ item }"  md-selectable="multiple" md-auto-select>
          <md-table-cell md-label="Nom" md-sort-by="name">{{ item.name }}</md-table-cell>
          <md-table-cell md-label="Auteur" md-sort-by="author">{{ item.author }}</md-table-cell>
          <md-table-cell md-label="Cover" md-sort-by="cover">{{ item.cover }}</md-table-cell>
          <md-table-cell md-label="Résumé" md-sort-by="resume">{{ item.resume }}</md-table-cell>
          <md-table-cell md-label="categorie" md-sort-by="category">{{ item.category }}</md-table-cell>
          <md-table-cell md-label="style" md-sort-by="style">{{ item.style }}</md-table-cell>
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
      openModal: false
    }
  },
  components:{
    AppBookAdd: BookAdd
  },
  computed:{
    books(){
      return this.$store.getters.books;
    }
  },
  methods:{
    onSelect (items) {
      this.selected = items;
    },
    getAlternateLabel (count) {
      let plural = ''
      count > 1 ? plural = 's' : plural = '';
      return `${count} livre${plural} selectionné${plural}`
    },
    // openModal () {
    //   this.openModal = true;
    // },
    jeferme () {
      this.openModal = false;
    },
    addToUserBook () {
      // return this.$store.dispatch('addToUserBook', userBook);
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

