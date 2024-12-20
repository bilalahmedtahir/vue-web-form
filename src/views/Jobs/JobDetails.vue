<template>
    <div>
      <h1>Jobs Detail View</h1>
      <p>this is job id: {{ ids }}</p>
    
    </div>
</template>

<script>
export default {
    props:['id'],
    data(){
      return{
        ids : this.$route.params.id
      }
    }
}

</script>