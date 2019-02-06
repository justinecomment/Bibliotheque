<template>
  <div id="AddForm">
    <section>
      <h6>{{title}}</h6>

      <md-field md-clearable v-for="(entry, index) in entity" :key="index">
        <label>{{entry.name}}</label>
        <md-input v-model="entry.value"></md-input>
      </md-field>

      <button @click="submitHandle">Ajouter</button>

    </section>
  </div>
</template>

<script>
import Book from './Book.vue';

export default {
  components:{
    appBook: Book
  },
  props:[
    'myEntity', 'myTitle'
  ],
  data(){
    return{
      title: null,
      entity: null
    }
  },
  created(){
    this.title = this.myTitle;
    this.entity = this.myEntity;
  },
  methods:{
    submitHandle(){
      const book = { 
        isActive: true, 
        nom: 'rafik', 
        couverture: 'bb', 
        auteur: 'bb', 
        résumé: 'bb', 
        format: "bb" 
      }
      this.$store.dispatch('addBook',book);
    }
  }
}
</script>

<style scoped>
  #AddForm{
    color: #b6b6b6;
  }

  section{
    background-color: #ffffff;
    width: 500px;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 20px 126px;
    box-shadow: 2px 2px #cdcdcd;
  }

  .md-field:after, .md-field:before{
    border: 0.5px solid grey;
  }

  button{
    background-color: #37cce5;
    padding: 8px 39px;
    border-radius: 30px;
    border: none;
    color: #fff;
    width: 100%;
  }

</style>


