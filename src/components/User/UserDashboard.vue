<template>
  <div id="Dashboard">
    <div class="avatar"></div>
    <p>{{username}}</p>

    <div class="allSections">
      <div class="section" v-for="(datas, index) in data" :key="index" >
        <p>{{datas.name}}</p>
        <span>{{datas.number}}</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data(){
    return{
      data:[
        { name: 'Livres lu', number: 3 },
        { name: 'Nombre de collections', number: 1},
        { name: 'Livres conseillés', number: 9 },
        { name: 'Nombre d\'amis', number: 13 },
        { name: 'Dernier livre crées', number: 'Nom du livre' },
        { name: 'Dernier livre ajouté', number: 'Nom du livre' },
      ]
    }
  },
  computed:{
    username(){
      return this.$store.getters.user;
    }
  }
}

</script>

<style scoped>
  #Dashboard{
    background-color: #fff;
    min-height: 500px;
    box-shadow: 2px 2px #cdcdcd;
    border-radius: 7px;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  #Dashboard > p{
    color: #4e65ff;
    font-weight: bold;
    margin-top: 20px;
  }

  .avatar{
    background-color: #fff;
    width: 100px;
    height: 100px;
    border-radius: 50%;
    box-shadow: 0px 0px 10px #cdcdcd;    
    margin-top: -25px;
  }

  .allSections{
    display: flex;
    width: 100%;
    justify-content: space-around;
    flex-wrap: wrap;
    padding: 0px 30px;
  }

  .section{
    min-width: 170px;
    min-height: 170px;
    border-radius: 8px;
    box-shadow: 2px 2px 15px #d6d6d6;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    font-weight: bold;
    color: #848484;
    font-size: 16px;
    margin: 20px;
    padding: 10px;
  }

  .section:hover{
    box-shadow: 0px 0px 15px #ff6767;
    cursor: pointer;
  }

  .section span{
    color: #ff6767;
    font-size: 40px;
  }
</style>


