<template>
  <div id="UserFriends">
    <h6>Mes friendss</h6>
    
    <b-button @click="openModal" variant="link">
      <i class="fas fa-plus iconAdd" v-b-tooltip.hover title="Ajouter un ami"></i>
    </b-button>
    <!-- MODAL -->
    <b-modal v-model="modalShow" ref="myModalRef" hide-footer>
      <div class="d-block text-center">
        <h6>Ajouter un livre</h6>
      </div>
      <app-user-friend-add v-on:closeModal="hideModal" :modalShow="modalShow"></app-user-friend-add>
    </b-modal>
    <!-- -->

    <section>
      <div class="friends" v-for="(element, index) in friends" :key="index">
        <p>{{element.name}}</p>
      </div>
    </section>
  </div>
</template>

<script>
import UserFriendAdd from './UserFriendAdd.vue';

export default {
  data(){
    return {
      selected: [],
      modalShow: false
    }
  },
  components:{
    appUserFriendAdd : UserFriendAdd
  },
  created(){
    return this.$store.dispatch('initUserFriends');
  },
  computed:{
    friends(){
      return this.$store.getters.userFriends;
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
  #UserFriends{
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

  .friends{
    background-color: #d1d1d1;
    width: 100px;
    height: 100px;
    border-radius: 50%;
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