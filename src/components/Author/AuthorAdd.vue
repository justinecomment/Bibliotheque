<template>
  <div id="AddForm">
    <section>
      <form @submit.prevent="submitHandle"> 
        
        <md-field :class="{'md-invalid': $v.name.$error }" class="validators">
          <label>Nom</label>
          <md-input 
            @change="$v.name.$touch()" 
            :class="{'md-invalid': !$v.name.$invalid }" 
            v-model="$v.name.$model"></md-input>
          <span class="md-error" v-if="$v.name.$error">champs requis</span>
        </md-field>

        <md-field :class="{'md-invalid': $v.firstname.$error }" class="validators">
          <label>Prénom</label>
          <md-input 
            @change="$v.firstname.$touch()" 
            :class="{'md-invalid': !$v.firstname.$invalid }" 
            v-model="$v.firstname.$model"></md-input>
          <span class="md-error" v-if="$v.firstname.$error">champs requis</span>
        </md-field>

        <md-field :class="{'md-invalid': $v.yearOfBirth.$error }" class="validators">
          <label>Année de naissance</label>
          <md-select v-model="$v.yearOfBirth.$model">
            <md-option v-for="number in years" :key="number" :value="number">{{number}}</md-option>
          </md-select>
          <span class="md-error" v-if="$v.yearOfBirth.$error">champs requis</span>
        </md-field>

        <md-field :class="{'md-invalid': $v.yearOfDeath.$error }" class="validators">
          <label>Année de décès</label>
          <md-select v-model="$v.yearOfDeath.$model">
            <md-option v-for="number in years" :key="number" :value="number">{{number}}</md-option>
          </md-select>
          <span class="md-error" v-if="$v.yearOfDeath.$error">champs requis</span>
        </md-field>
       
        <md-field :class="{'md-invalid': $v.nativeCountry.$error }" class="validators">
          <label>Pays de naissance</label>
          <md-input 
            @change="$v.nativeCountry.$touch()" 
            :class="{'md-invalid': !$v.nativeCountry.$invalid }" 
            v-model="$v.nativeCountry.$model"></md-input>
          <span class="md-error" v-if="$v.nativeCountry.$error">champs requis</span>
        </md-field>

        <button type="submit">Ajouter</button>
      </form>
    </section>
  </div>
</template>

<script>
import { required, validations, between } from 'vuelidate/lib/validators';

export default {
  props:[
    'openModal'
  ],
  data(){
    return{
      name: '',
      firstname: '',
      yearOfBirth: '',
      yearOfDeath: '',
      nativeCountry: '',
    }
  },
  validations: {
    name: {
      required
    },
    firstname: {
      required
    },
    yearOfBirth: {
      required,
    },
    yearOfDeath: {
      required
    },
    nativeCountry: {
      required
    }
  },
  watch:{
    openModal(){
      this.$props.openModal ? this.resetAll() : this.resetAll();
    }
  },
  computed:{
    years(){
      let list = [];
      for( let i = 1800 ; i <= 2019 ; i++ ) {
        list.push(i);
      }
      return this.yearOfBirth = list;
    }
  },
  methods:{
    submitHandle(event){
      this.$v.$touch();
      if (!this.$v.$invalid) {
        const newAuthor={
          name: this.name,
          firstname: this.firstname,
          yearOfBirth: this.yearOfBirth,
          yearOfDeath: this.yearOfDeath,
          nativeCountry: this.nativeCountry,
        }

        this.$store.dispatch('addAuthor', newAuthor);
        this.$emit('onclosemodal');
        this.$toasted.show("Auteur ajouté avec succès", { 
          theme: "bubble", 
          position: "top-right", 
          duration : 3000,
          type: 'success'
        });
      }
    },
    resetAll(){
      this.$v.$reset();
      this.name = '';
      this.firstname = '';
      this.yearOfBirth = '';
      this.yearOfDeath = '';
      this.nativeCountry = '';
    }
  }
}
</script>

<style lang="scss" scoped>
  h6{
    color: #b6b6b6;
  }

  section{
    display: flex;
    flex-direction: column;
    align-items: center;
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


