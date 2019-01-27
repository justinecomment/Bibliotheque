<template>
  <div id="AddForm">
    <section>
      <h6>Ajouter un livre</h6>

      <md-field md-clearable v-for="(entry, index) in book" :key="index">
        <label>{{entry.name}}</label>
        <md-input v-model="entry.value"></md-input>
      </md-field>

      <button @click="submitHandle">Ajouter</button>

    </section>
  </div>
</template>

<script>
export default {
  data(){
    return{
      selectedComponent: '',
      book: [
        { name: 'Format', value: null},
        { name: 'Auteur', value: null},
        { name: 'Résumé', value: null},
        { name: 'Style', value: null},
        { name: 'Couverture', value: null}
      ]
    }
  },
  methods:{
    submitHandle(){
      
    }
  },
  mounted(){
    const route = this.$route.path;
    if(route === '/add/book'){
      this.selectedComponent = 'book';
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


