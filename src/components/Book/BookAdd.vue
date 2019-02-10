<template>
  <div id="AddForm">
    <form @submit="submitHandle"> 
      <div v-for="(data, index) in formData" :key="index" >

        <md-field v-if="data.select" :class="{'md-invalid' : submitted && !data.isValid }">
          <label>Auteurs</label>
          <md-select v-model="data.value">
            <md-option v-for="item in authors" :key="item.id" :value="item.name">{{item.name}}</md-option>
          </md-select>
          <span class="md-error errors" v-if="!data.value">champs requis</span>
        </md-field>


        <md-field v-else :class="{'md-invalid' : submitted && !data.isValid }">
          <label>{{data.name}}</label>
          <md-input v-model="data.value" @change="data.isValid = true"></md-input>
          <span class="md-error errors" v-if="!data.value">champs requis</span>
        </md-field>

      </div>

      <button type="submit">Ajouter</button>
    </form>
  </div>
</template>

<script>
export default {
  props:[
    'openModal'
  ],
  data(){
    return{
      icon : 'check',
      errors : null,
      submitted: false,
      formData:[
        {
          name: 'name',
          value: '',
          isValid: false,
          select: false
        },
        {
          name: 'author',
          value: '',
          isValid: false,
          select: true
        },
        {
          name: 'cover',
          value: '',
          isValid: false,
          select: false
        },
        {
          name: 'resume',
          value: '',
          isValid: false,
          select: false
        },
        {
          name: 'category',
          value: '',
          isValid: false,
          select: false
        },
        {
          name: 'style',
          value: '',
          isValid: false,
          select: false
        }
      ]
    }
  },
  computed:{
    authors(){
      return this.$store.getters.authors;
    }
  },
  watch:{
    openModal(){
      this.$props.openModal ? this.reset() : null;
    }
  },
  methods:{
    reset(){
      if(!this.formData.select){
        for (let index in this.formData){
          this.formData[index].value = '';
        }
      }
    },
    submitHandle(event){
      event.preventDefault();
      this.submitted = true;
      let newBook = {};
      let onError = 0;

      this.formData.forEach((element) => {
        if(element.value !== ''){
          newBook[element.name] = element.value;
          element.isValid = true;          
        } else{
          onError ++;
        }
      });

      if(onError === 0){ 
        const newBook={
          id: '5',
          name: this.formData
        }
              
        this.$store.dispatch('addBook', newBook);
        // this.$emit("onclosemodal");
        this.$toasted.show("Livre ajouté avec succès", { 
          theme: "bubble", 
          position: "top-right", 
          duration : 3000,
          type: 'success'
        });
      }
    }
  }
}
</script>

<style scoped>
  #AddForm{
    display: flex;
    flex-direction: column;
    align-items: center;
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
    cursor: pointer;
  }

  button:hover{
    background-color: #1fb7d1;
  }

</style>


