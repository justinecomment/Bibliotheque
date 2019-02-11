<template>
  <div id="Books">
    <h6>AUTEURS</h6>
    <b-button @click="openModal = true" variant="link">
      <i class="fas fa-plus iconAdd" v-b-tooltip.hover title="Ajouter un Auteur"></i>
    </b-button>

    <!-- MODAL -->
    <b-modal v-model="openModal" ref="myModalRef" hide-footer style="z-index: 2; width: 50%">
      <div class="d-block text-center">
        <h6>Ajouter un Auteur</h6>
      </div>
      <app-Author-Add @onclosemodal="openModal = false" :open-modal="openModal"></app-Author-Add>
    </b-modal>
    <!-- -->

    <section class="sectionSearch">
      <i class="fas fa-search"></i>
      <input placeholder="Rechercher un Auteur" value="" />
    </section>

    <section>
      <md-table v-model="authors" md-card @md-selected="(items) => selected = items">
        <md-table-toolbar></md-table-toolbar>
        <md-table-toolbar slot="md-table-alternate-header" slot-scope="{ count }">
          <div class="md-toolbar-section-start">{{ getAlternateLabel(count) }}</div>

          <div class="md-toolbar-section-end">
            <md-button>
              <md-icon v-b-tooltip.hover title="Ajouter à mes auteurs">add</md-icon>
            </md-button>
          </div>
        </md-table-toolbar>

        <md-table-row slot="md-table-row" slot-scope="{ item }"  md-selectable="multiple" md-auto-select>
          <md-table-cell md-label="Nom" md-sort-by="name">{{ item.name }}</md-table-cell>
          <md-table-cell md-label="Prénom" md-sort-by="firstname">{{ item.firstname }}</md-table-cell>
          <md-table-cell md-label="Année de naissance" md-sort-by="yearOfBirth">{{ item.yearOfBirth }}</md-table-cell>
          <md-table-cell md-label="Année de décès" md-sort-by="yearOfDeath">{{ item.yearOfDeath }}</md-table-cell>
          <md-table-cell md-label="Pays d'origine" md-sort-by="nativeCountry">{{ item.nativeCountry }}</md-table-cell>
        </md-table-row>
      </md-table>
    </section>

  </div>
</template>

<script>
import AuthorAdd from './AuthorAdd.vue';

export default {
  data(){
    return {
      selected: [],
      openModal: false
    }
  },
  components:{
    AppAuthorAdd: AuthorAdd
  },
  computed:{
    authors(){
      return this.$store.getters.authors;
    }
  },
  methods:{
    getAlternateLabel (count) {
      let plural = ''
      count > 1 ? plural = 's' : plural = '';
      return `${count} auteur${plural} selectionné${plural}`
    }
  }
}

</script>

<style lang="scss" scoped>
  #Books{
    display: flex;
    flex-direction: column;
    align-items: center;

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
  }

  

</style>

