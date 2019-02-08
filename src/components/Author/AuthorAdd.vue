<template>
  <div id="AddForm">
    <section>
      <form @submit="submitHandle"> 
        <div v-for="(data, index) in formData" :key="index">
          <md-field :class="{'md-invalid' : submitted && !data.isValid }">
            <label>{{data.name}}</label>
            <md-input v-model="data.value" @change="data.isValid = true"></md-input>
            <span class="md-error errors" v-if="!data.value">champs requis</span>
          </md-field>
        </div>
        <button type="submit">Ajouter</button>
      </form>
    </section>
  </div>
</template>

<script>
export default {
  props:[
    'modalShow'
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
          isValid: false
        },
        {
          name: 'firstname',
          value: '',
          isValid: false
        },
        {
          name: 'yearOfBirth',
          value: '',
          isValid: false
        },
        {
          name: 'yearOfDeath',
          value: '',
          isValid: false
        },
        {
          name: 'nativeCountry',
          value: '',
          isValid: false
        }
      ]
    }
  },
  watch:{
    modalShow(){
      this.modalShow ? this.reset() : null;
    }
  },
  methods:{
    reset(){
      for (let index in this.formData){
        this.formData[index].value = '';
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
        this.$emit('closeModal');
        this.$store.dispatch('addBook', newBook);
        this.$toasted.show("Auteur ajouté avec succès", { 
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
  h6{
    color: #b6b6b6;
  }

  section{
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
  }

</style>


