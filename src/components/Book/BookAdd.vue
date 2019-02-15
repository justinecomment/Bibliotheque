<template>
  <div id="AddForm">
    <form @submit.prevent="submitHandle"> 

      <md-field :class="{'md-invalid': $v.name.$error }" class="validators">
        <label>Nom</label>
        <md-input 
          @change="$v.name.$touch()" 
          :class="{'md-invalid': !$v.name.$invalid }" 
          v-model="$v.name.$model">Nom</md-input>
        <span class="md-error errors" v-if="$v.name.$error">champs requis</span>
      </md-field>

      <md-field :class="{'md-invalid': $v.cover.$error }" class="validators">
        <label>Cover</label>
        <md-input 
          @change="$v.cover.$touch()"
          :class="{'md-invalid': $v.cover.$invalid }"
          v-model="$v.cover.$model">Cover</md-input>
        <span class="md-error errors" v-if="$v.cover.$error">champs requis</span>
      </md-field>

      <md-field :class="{'md-invalid': $v.author.$error }" class="validators">
        <label>Auteurs</label>
        <md-select v-model="$v.author.$model">
          <md-option v-for="item in authors" :key="item.id" :value="item.id">{{item.name}}</md-option>
        </md-select>
        <span class="md-error errors" v-if="$v.author.$error">champs requis</span>
      </md-field>

      <md-field :class="{'md-invalid': $v.resume.$error }" class="validators">
        <label>Résumé</label>
        <md-input 
          @change="$v.resume.$touch()"
          :class="{'md-invalid': $v.resume.$invalid }"
          v-model="$v.resume.$model">Résumé</md-input>
        <span class="md-error errors" v-if="$v.resume.$error">champs requis</span>
      </md-field>

      <md-field :class="{'md-invalid': $v.category.$error }" class="validators">
        <label>Catégories</label>
        <md-select v-model="$v.category.$model">
          <md-option v-for="item in categories" :key="item.id" :value="item.id">{{item.name}}</md-option>
        </md-select>
        <span class="md-error errors" v-if="$v.category.$error">champs requis</span>
      </md-field>

      <md-field :class="{'md-invalid': $v.style.$error }" class="validators">
        <label>Style</label>
        <md-select v-model="$v.style.$model">
          <md-option v-for="item in styles" :key="item.id" :value="item.id">{{item.name}}</md-option>
        </md-select>
        <span class="md-error errors" v-if="$v.style.$error">champs requis</span>
      </md-field>

      <button type="submit">Ajouter</button>

    </form>
  </div>
</template>

<script>
import { required, validations } from 'vuelidate/lib/validators';

export default {
  props:[
    'openModal'
  ],
  data(){
    return{
      name: '', 
      cover: '', 
      author: null,  
      resume: '', 
      category: null, 
      style: null
    }
  },
  validations: {
    name: {
      required
    },
    cover: {
      required
    },
    author: {
      required
    },
    resume: {
      required
    },
    category: {
      required
    },
    style: {
      required
    },
  },
  computed:{
    authors(){
      return this.$store.getters.authors;
    },
    categories(){
      return this.$store.getters.categories;
    },
    styles(){
      return this.$store.getters.styles;
    }
  },
  watch:{
    openModal(){
      this.$props.openModal ? this.resetAll() : this.resetAll();
    }
  },
  methods:{
    submitHandle(event){
      this.$v.$touch();
      if (!this.$v.$invalid) {
        const newBook={
          id: this.$store.getters.books.length + 1, 
          name: this.name, 
          cover: this.cover, 
          author: this.author,  
          resume: this.resume, 
          category: this.category, 
          style: this.style
        }

        this.$store.dispatch('addBook', newBook);
        this.$emit("onclosemodal");
        this.$toasted.show("Livre ajouté avec succès", { 
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
      this.cover = '';
      this.author = null;
      this.resume = '';
      this.category = null;
      this.style = null;
    }
  }
}
</script>

<style lang="scss" scoped>
  #AddForm{
    display: flex;
    flex-direction: column;
    align-items: center;

    button{
      background-color: #37cce5;
      padding: 8px 39px;
      border-radius: 30px;
      border: none;
      color: #fff;
      width: 100%;
      cursor: pointer;

      &:hover{
        background-color: #1fb7d1;
      }
    }
  }
</style>


