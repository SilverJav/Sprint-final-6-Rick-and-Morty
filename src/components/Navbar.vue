<template>
<div class="mb-5">
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
  <div class="container">
    <a class="navbar-brand" href="#">BOOTCAMP VUE</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <a class="nav-link" href=""><router-link to="/home">Home</router-link></a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href=""><router-link to="/about">About</router-link></a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href=""><router-link to="/contact">Contact</router-link></a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href=""><router-link to="/">Login</router-link></a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="" data-bs-toggle="modal" data-bs-target="#exampleModalCart">Carrito</a>
        </li>
        
        
        
      </ul>
    </div>
  </div>
</nav>
</div>
    
</template>

<script>

import CartDetail from'@/components/CartDetail.vue'

export default {
  
  components:{
    CartDetail,
  },
  
  
}
</script>

<style>

</style>