<template lang="">
    <div id="product-list-one">
        <h2>Product list one</h2>
        <ul>
            <li v-for="product in getProductWithItemName" :key= "product.title">
                <span>{{product.designation}}</span>
            </li>
        </ul>


        <h3>Add Product</h3>
        <input v-model="newProductTitle" placeholder="Title" />
        <input v-model="newProductDesignation" placeholder="Designation" />

        <!-- <button @click="addNewProduct">Add Product</button> -->
        <button @click="addProductWithDelay">Add Product</button>
        
    </div>
</template>
<script>
export default {
    data() {
    return {
      newProductTitle: "",
      newProductDesignation: "",
    };
  },
    computed: {
        products(){
            return this.$store.state.products
        },
        getProductWithItemName(){
            console.log("<<<first>>>",this.$store.getters.getProductWithItemName)
            return this.$store.getters.getProductWithItemName;
        }
    },
    methods: {
    addProductWithDelay() {
      if (this.newProductTitle && this.newProductDesignation) {
        const newProduct = {
          title: this.newProductTitle,
          designation: this.newProductDesignation,
        };
        this.$store.dispatch('addProductWithDelay', newProduct); 
        this.newProductTitle = '';
        this.newProductDesignation = '';
      }
  },
}
    
}
</script>
<style lang="">
    
</style>