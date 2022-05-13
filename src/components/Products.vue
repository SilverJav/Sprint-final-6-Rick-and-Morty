<template>
  <div>
  <Card :resultProps="result" />
  
  </div>
  <div>
    <h1>hola</h1>
  </div>
</template>

<script>

import Card from '@/components/Card.vue'

export default {
    components:{
        Card,
        },
   
    data() {
    return {
      result: [],
       
    };
  },
   

  mounted() {
    fetch("https://rickandmortyapi.com/api/character")
      .then((res) => res.json())
      .then(data => {this.result = data.results
      console.log(data.results)})
  },
};

  

</script>

<style>
.card{
  min-width: 140px;
}
</style>