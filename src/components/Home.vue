<template>
  <div id="Home">
    <p>aec dum oriens diu perferret, caeli reserato tepore Constantius consulatu suo septies et Caesaris ter egressus Arelate Valentiam petit, in Gundomadum et Vadomarium fratres Alamannorum reges arma moturus, quorum crebris excursibus vastabantur confines limitibus terrae Gallorum.</p>
    <div class="allRound">
      <div class="section">
        <div class="round"></div>
        <h4>Blabla</h4>
        <p>blablablablabla</p>
      </div>

      <div class="section">
        <div class="round"></div>
        <h4>Blabla</h4>
        <p>blablablablabla</p>
      </div>

      <div class="section">
        <div class="round"></div>
        <h4>Blabla</h4>
        <p>blablablablabla</p>
      </div>

    </div>
  </div>
</template>

<script>
export default {
  
}
</script>

<style scoped>
  #Home{
    margin: 20px 20%;
    text-align: center;
  }

  p, h4{
    color: #848484;
  }

  .allRound{
    display: flex;
    justify-content: center;
  }

  .section{
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .round{
    background-color: #8875e7;
    width: 100px;
    height: 100px;
    border-radius: 50%;
    margin: 0px 20px;

  }
</style>


