<template>
<div class="container">
  
  <div class="mb-3">
    <label for="exampleInputEmail1" class="form-label">User</label>
    <input v-model="usuario" type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp">
    <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
  </div>
  <div class="mb-3">
    <label for="exampleInputPassword1" class="form-label">Password</label>
    <input v-model="contra"  type="password" class="form-control" id="exampleInputPassword1">
  </div>
  <div class="mb-3 form-check">
    <input type="checkbox" class="form-check-input" id="exampleCheck1">
    <label class="form-check-label" for="exampleCheck1">Check me out</label>
  </div>
  <button class="btn btn-primary" @click="validarLogin()">Submit</button>

</div>
</template>

<script>
export default {

  name:"LoginView",

  data() {
    return {
      resultUser:[],
      usuario:"",
      contra:"",
      loginNav:"Login"
    };
  },

  mounted() {
    fetch('json/users.json')
      .then((res) => res.json())
      .then(data => {this.resultUser = data
      console.log(data)}
      )
      
  },
  methods:{
    validarLogin(){

      if(this.usuario==this.resultUser[0].user && this.contra==this.resultUser[0].pass){
        this.$router.push('home')
      }else{
        alert("datos malos")
      }
    }
  }
}
</script>

<style>

</style>