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
      <app-Book-Add @onclosemodal="openModal = false" :open-modal="openModal"></app-Book-Add>
    </b-modal>
    <!-- -->

    <section class="sectionSearch">
      <i class="fas fa-search"></i>
      <input placeholder="Rechercher un livre" value="" />
    </section>

    <section>
       <span v-if="selected.length > 0">
          <div>{{ getAlternateLabel() }}</div>
          <md-button @click.native="AddToUserBook">
            <md-icon v-b-tooltip.hover title="Ajouter à mes livres">add</md-icon>
          </md-button>
        </span>

      <md-table v-model="books" md-card @md-selected="onSelect">
        <md-table-row slot="md-table-row" slot-scope="{ item }" md-auto-select>
          <md-table-cell md-label="Id" md-sort-by="id">
            <md-checkbox v-model="selected" :value="item.id"></md-checkbox>
          </md-table-cell>
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
    onSelect (item) {
      this.selected = item;
    },
    getAlternateLabel () {
      let numberItems = this.selected.length;
      let plural = ''
      numberItems > 1 ? plural = 's' : plural = '';
      return `${numberItems} livre${plural} selectionné${plural}`
    },
    AddToUserBook(){
      this.$store.dispatch('addToUserBook', this.selected);
    }
  }
}

</script>

<style lang="scss" scoped>
  #Books{
    display: flex;
    flex-direction: column;
    align-items: center;

      h6{
        color: #aa87cb;
        font-weight: bold;
        text-transform: uppercase;
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
        position: relative;
        
        input{
          border: none;
          background-color: transparent;
          padding-left: 10px;
        }

        span{
          background-color: #f8d3d3; 
          display:flex;
          align-items: center;
          height: 50px;
          padding: 0px 20px;
          position: absolute;
          z-index: 2;
          width: 100%;

          div{
            flex: 1;
          }
        }

        table{
          margin-top: 40px;
        }
      }

      .iconAdd i, .iconAdd{
        color: #37cce5 !important;
        font-weight: bold;
        font-size: 30px;
      }
  }

  
  


</style>

