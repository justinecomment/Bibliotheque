<template>
  <div id="MyBooks">
    <h3>Mes livres</h3>
    <section class="searchSection">
      <i class="fas fa-search"></i>
      <input placeholder="Rechercher un livre" value="" />
    </section>

    <section>
      <div class="book" v-for="(element, index) in userBooks" :key="index">
        <p>{{element.name}}</p>
      </div>
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
    return this.$store.dispatch('initUserBooks');
  },
  computed:{
    userBooks(){
      return this.$store.getters.userBooks;
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
  #MyBooks{
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
    margin: 20px 0px;
  }


  .searchSection{
    background-color: #eeeeee;
    width: 100%;
    padding: 10px;
  }

  .book{
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

  input{
    border: none;
    background-color: transparent;
    padding-left: 10px;
  }

  

</style>

