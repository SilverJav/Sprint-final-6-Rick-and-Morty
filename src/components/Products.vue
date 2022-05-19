<template>
  <div>
  <Card :resultProps="result" />
  
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

//Consume la api 
  async created() {
    try{
    const request = await fetch("https://rickandmortyapi.com/api/character")
    const response = await request.json()
      this.result = response.results}
      catch{
      console.log(data.results)}
      
      for (let i=0; i < this.result.length; i++){
        this.result[i].stock = 10
      }
      
      

}};

  

</script>

<style>
.card{
  min-width: 140px;
}
</style>