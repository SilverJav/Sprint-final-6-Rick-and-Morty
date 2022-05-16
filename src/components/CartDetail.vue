<template>
  <div class="modal fade" id="exampleModalCart" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel">Carrito</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
         <div class="modal-body">
        <table class="table">
  <thead>
    <tr>
      <th scope="col">Nombre</th>
      <th scope="col">Precio</th>
      <th scope="col">Cant</th>
      <th scope="col">Total</th>
    </tr>
  </thead>
  <tbody>
    <tr v-for="(item, index) in cardACart"  :key="index" > 
      <td>{{item.name}}</td>
      <td>{{item.precio}}</td>
      <td>{{item.cant}}</td>
      <td>{{item.cant*item.precio}}</td>
      <td>
        <button type="button" class="btn btn-secondary" @click="oneLess(item.id)" >-</button>
        <button type="button" class="btn btn-secondary" @click="oneMore(item.id)" >+</button>
        <button type="button" class="btn btn-secondary" @click="remove(item.id)" >X</button>
      </td>
    </tr>
  
  </tbody>
</table>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cerrar</button>
        <button type="button" class="btn btn-primary" @click="removeAll" >Vaciar Carrito</button>
      </div>
    </div>
  </div>
</div>
  </div>
</template>

<script>
export default {
    props: {
        cardACart:{
            type:Array,
            required:true,
        },
        // removeAllP:{
        //     type:Function,
        //      required:false,
        // },
    },
    methods:{
      removeAll(){
        console.log(this.cardACart)
        this.$emit('removeAll2')
      },
      oneLess(idLess){
        this.$emit('oneLess2', idLess)

      }
      ,
      oneMore(idMore){
        this.$emit('oneMore2', idMore)
      },
      remove(idRemove){
        this.$emit('remove2', idRemove)
      }

    }
    
}

</script>

<style>

</style>