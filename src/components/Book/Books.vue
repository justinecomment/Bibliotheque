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
        <div v-if="selected.length > 0" class="selected">
          <div>{{ getAlternateLabel() }}</div>
          <div>{{ selected }}</div>
          <md-button @click.native="AddToUserBook()">
            <md-icon v-b-tooltip.hover title="Ajouter à mes livres">add</md-icon>
          </md-button>
        </div>

      <md-table md-card style="margin-top: 40px">
        <md-table-head></md-table-head>
        <md-table-head>ID</md-table-head>
        <md-table-head>Nom</md-table-head>
        <md-table-head>Auteur</md-table-head>
        <md-table-head>Cover</md-table-head>
        <md-table-head>Résumé</md-table-head>
        <md-table-head>categorie</md-table-head>
        <md-table-head>style</md-table-head>
        
        <md-table-row v-for="(item,index) in books" :key="index"  md-selection md-autoselect >
          <md-table-cell md-sort-by="id">
            <md-checkbox v-model="selected" :value="index + 1"></md-checkbox>
          </md-table-cell>
          <md-table-cell md-label="id" md-sort-by="id">{{ item.id }}</md-table-cell>
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
import services from '../../services/services';

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
      let books = this.$store.getters.books;
      return services.convertBooksIdToItems(books);
    }
  },
  methods:{
    getAlternateLabel () {
      let numberItems = this.selected.length;
      let plural = ''
      numberItems > 1 ? plural = 's' : plural = '';
      return `${numberItems} livre${plural} selectionné${plural}`
    },
    AddToUserBook () {
      let formData={
        id: this.$store.getters.userBooks.length + 1,
        idBook : parseInt(this.selected)
      };

      this.$store.dispatch('addToUserBook', formData).then( () => {
        this.selected = [];
        this.$toasted.show("Livre ajouté avec succès", { 
          theme: "bubble", 
          position: "top-right", 
          duration : 3000,
          type: 'success'
        });
      });
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

        .selected{
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
      }

      .iconAdd i, .iconAdd{
        color: #37cce5 !important;
        font-weight: bold;
        font-size: 30px;
      }
  }

  
  


</style>

