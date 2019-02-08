<template>
  <div id="AddCollection">
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
          name: 'description',
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
      let newFriend = {};
      let onError = 0;

      this.formData.forEach((element) => {
        if(element.value !== ''){
          newFriend[element.name] = element.value;
          element.isValid = true;          
        } else{
          onError ++;
        }
      });

      if(onError === 0){        
        this.$emit('closeModal');
        this.$store.dispatch('userAddCollection', newFriend);
        this.$toasted.show("Collection ajouté avec succès", { 
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
  #AddCollection{
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


