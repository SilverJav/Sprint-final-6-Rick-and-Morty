<template>
  <CartDetail :cardACart="carrito" :removeAllP="removeAll"/>
  <Modal :modalProps="modal" />
  
  <div class="container-fluid mb-5">
    <div class="container w-50 d-flex">
      <input
        class="form-control me-2"
        v-model="filtro"
        type="text"
        placeholder="Buscar..."
        aria-label="Search"
      />
      <button class="btn btn-outline-success" type="submit">Search</button>
    </div>
    <h1 class="text-center mb-5">RICK AND MORTY</h1>
    <div class="row justify-content-around">
      <div
        class="col-9 col-sm-4 col-md-3 col-lg-2 px-4 pb-2"
        v-for="(item, index) in filtroNombres"
        :key="index"
      >
        <div class="card">
          <img
            class="card-img-top"
            v-bind:src="item.image"
            v-bind:alt="item.name"
          />
          <div class="card-body">
            <h5 class="card-title text-center">{{ item.name }}</h5>
          </div>
          <div class="d-flex justify-content-center flex-wrap">
            <div class="d-flex justify-content-around w-100">
              <button type="button" class="btn btn-primary p-1" @click="addToCart(item.id)">Comprar</button>
              <button
                type="button"
                class="btn  btn-danger p-1"
                data-bs-toggle="modal"
                data-bs-target="#exampleModal"
                @click="showMore(item)"
              >
                Detalles
              </button>
            </div>
            
          </div>
        </div>
      </div>
    </div>

    
  </div>
</template>

<script>
import CartDetail from "@/components/CartDetail.vue";

import Modal from "@/components/Modal.vue";
export default {
  components: {

    Modal,
    CartDetail,
  },
  data() {
    return {
      carrito:[],
      producto:[],
      modal: {
        name: "",
        origin: "",
        status: "",
        gender: "",
        species: "",
      },
      filtro: "",
    };
  },
  props: {
    resultProps: {
      type: Array,
      required: true,
    },
    favoritosProps: {
      type: Array,
    },
  },
  methods: {
    showMore(object) {
      //this.modal.title = object.name
      this.modal = {
        name: object.name,
        origin: object.origin.name,
        status: object.status,
        gender: object.gender,
      };
      console.log(object);
    },
    addFavorites(item) {
      const repeat = this.favorites.some((personaje) => personaje == item);

      if (repeat) {

        console.log("Ya está en tus favoritos");
      } else {
        this.favorites.push(item);
      }
      console.log(this.favorites);
    },
    addToCart(idAdd){
      //verificar si el producto ya esta en el carrito
      this.producto = this.resultProps.find(item=>item.id === idAdd)

      this.verificar= this.carrito.some(item=>item.id===idAdd)

      //const repetido = this.carrito.some((yaesta) => yaesta == item);
       
       if (!this.verificar) {
      this.producto.precio = 100
      this.producto.cant = 1
      this.carrito.push(this.producto)
    } else {
        this.producto.cant = this.producto.cant+1
      console.log("el producto ya esta")
      }
      console.log(this.carrito);

    },
    removeAll(){
      this.carrito = []
    }
    
  },
  computed: {
    filtroNombres: function () {
      return this.resultProps.filter((item) => {
        return item.name.toLowerCase().match(this.filtro.toLowerCase());
      });
    },
  },
};
</script>

<style>
</style>