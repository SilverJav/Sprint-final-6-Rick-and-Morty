<template>
<div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel">{{modalProps.name}}</h5>
          
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
         <div class="modal-body">
        <ul>
          <li>Orígen: {{modalProps.origin}}</li>
          <li>Género: {{modalProps.gender}}</li>
          <li>Especie: {{modalProps.species}}</li>
          <li>Estado: {{modalProps.status}}</li>
        </ul>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        <button type="button" class="btn btn-primary">Save changes</button>
      </div>
    </div>
  </div>
</div>
  </div>

</template>

<script>
export default {

    props: {
        modalProps:{
            type:Object,
            required:true,
        }
    }
}
</script>

<style>

</style>