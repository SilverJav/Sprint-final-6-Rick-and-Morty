<template>
<div class="container">
  <form>
  <div class="mb-3">
    <label for="exampleInputEmail1" class="form-label">User</label>
    <input v-model="usuario" type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp">
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
  <button type="submit" class="btn btn-primary">Submit</button>
</form>
</div>
</template>

<script>
export default {
  name:"LoginView",
  data() {
    return {
      resultUser: [],
      usuario:"",
      usuario2:"admin",
      contra:"",
      contra2:"123",
    };
  },

  mounted() {
    fetch('json/users.json')
      .then(data => {this.resultUser = data
      console.log(data)}
      )
      
  },
  methods:{
    validarLogin(){
      if(usuario===usuario2 && contra===contra2){
        
      }
    }
  }

}
</script>

<style>

</style>