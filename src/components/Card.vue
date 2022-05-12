<template>
<div class="container-fluid mb-5">
     <div class="container w-50 d-flex" >
        <input class="form-control me-2" v-model="filtro" type="text" placeholder="Buscar..." aria-label="Search">
        <button class="btn btn-outline-success" type="submit">Search</button>
  </div>
    <h1 class="text-center mb-5">RICK AND MORTY</h1>
    <div class="row justify-content-around">
      <div class="col-9 col-sm-4 col-md-3 col-lg-2 px-4 pb-2" v-for="(item, index) in filtroNombres" :key="index">
        <div class="card ">
          <img class="card-img-top" v-bind:src="item.image" v-bind:alt="item.name"/>
        <div class="card-body ">
          <h5 class="card-title text-center ">{{ item.name }}</h5>
        </div>
        <div class="d-flex justify-content-center flex-wrap">
          <div class="d-flex justify-content-around w-100 ">
          <button type="button" class="btn btn-primary p-1">Comprar</button>
          <button type="button" class="btn btn-primary p-1" data-bs-toggle="modal" data-bs-target="#exampleModal" @click="showMore(item)" >Detalles</button>
          </div>
          <button type="button" class="btn btn-danger p-1" >Favorito</button>
        </div>
        </div>
      </div>
    </div>
    <Modal :modalProps="modal"/>
</div>
  
</template>

<script>
import Modal from '@/components/Modal.vue'
export default{
    
    components:{
        Modal,
        },
    data(){
        return{
            modal:{
            name: "",
            origin: "",
            status:"",
            gender:"",
            species:"",
      },
filtro:"",
        }
        
    },
    props: {
        resultProps:{
            type:Array,
            required:true,
        }
    },
    methods:{
   showMore(object){
     //this.modal.title = object.name
     this.modal = {
       name: object.name,
       origin:object.origin.name,
       status:object.status,
       gender:object.gender,
     }
     console.log(object)
   }
   
 }, 
    computed:{
    filtroNombres: function(){
      return this.resultProps.filter((item) => {
        return item.name.toLowerCase().match(this.filtro.toLowerCase());
      })
    }
  },
}
</script>

<style>

</style>