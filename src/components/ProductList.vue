<template>
    <div class="container">
      <h2>List of Products</h2>
      <p class="message">{{ productMessage }}</p>
  
      <table class="table" v-if="products.length">
        <thead>
          <tr>
            <th>Name</th>
            <th>Description</th>
            <th>Price</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
            <tr v-for="product in products" :key="product.id">
              <td>
                  <span v-if="!product.editing" @click="editProduct(product)">{{ product.name }}</span>
                  <input v-else v-model="product.editedName" type="text" required>
              </td>
              <td>
                  <span v-if="!product.editing" @click="editProduct(product)">{{ product.description }}</span>
                  <input v-else v-model="product.editedDescription" type="text" required>
              </td>
              <td>
                  <span v-if="!product.editing" @click="editProduct(product)">₱{{ product.price }}</span>
                  <input v-else v-model="product.editedPrice" type="number" required>
              </td>
              <td>
              </td>
            </tr>
      
        </tbody>
      </table>
      
      <div v-else>
        <p>Sorry, No product available at the moment!</p>
      </div>
  
      <div>
        <AddProduct />
      </div>
    </div>
  </template>
  
  <script>
  import AddProduct from './AddProduct.vue';
  
  export default {
    components: {
       AddProduct
    },
    data() {
      return {
        productMessage: '',
      };
    },
    computed: {
      // Retrieve products from the store
      products() {
        return this.$store.state.products;
      },
    },
    methods: {
     
      
      
      
      
    },
  };
  </script>
  
  
  