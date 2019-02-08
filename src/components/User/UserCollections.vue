<template>
  <div id="UserCollections">
    <h6>Mes collections</h6>
    
    <b-button @click="openModal" variant="link">
      <i class="fas fa-plus iconAdd" v-b-tooltip.hover title="Ajouter une collection"></i>
    </b-button>
    <!-- MODAL -->
    <b-modal v-model="modalShow" ref="myModalRef" hide-footer>
      <div class="d-block text-center">
        <h6>Ajouter un livre</h6>
      </div>
      <app-user-collection-add v-on:closeModal="hideModal" :modalShow="modalShow"></app-user-collection-add>
    </b-modal>
    <!-- -->

    <section>
      <div class="collection" v-for="(element, index) in collections" :key="index">
        <p>{{element.name}}</p>
      </div>
    </section>
  </div>
</template>

<script>
import UserCollectionAdd from './UserCollectionAdd.vue';

export default {
  data(){
    return {
      selected: [],
      modalShow: false
    }
  },
  components:{
    appUserCollectionAdd : UserCollectionAdd
  },
  created(){
    return this.$store.dispatch('initUserCollections');
  },
  computed:{
    collections(){
      return this.$store.getters.userCollections;
    }
  },
  methods:{
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
  #UserCollections{
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  h6{
    color: #aa87cb;
    font-weight: bold;
    text-transform: uppercase;
  }

  section{
    display: flex;
  }

  .collection{
    background-color: #d1d1d1;
    width: 100px;
    height: 100px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0px 10px;
  }

  .iconAdd i, .iconAdd{
    color: #37cce5 !important;
    font-weight: bold;
    font-size: 30px;
  }

</style>