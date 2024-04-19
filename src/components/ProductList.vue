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
                <button @click="deleteProduct(product)">Delete</button>
              </td>
            </tr>
      
        </tbody>
      </table>
      
      <div v-else>
        <p>Sorry, No product available at the moment!</p>
      </div>
  
      <div>
        <AddProduct/>
      </div>
    </div>
  </template>
  
  <script>
  import AddProduct from './AddProduct.vue'

  export default {
    name: 'productList',
    components: {
       AddProduct
    },
    data() {
      return {
        productMessage: '',
        editingProduct: null,
      };
    },
    computed: {
      // Retrieve products from the store
      products() {
        return this.$store.state.products;
      },
    },
    methods: {     
      editProduct(product) {
      // Reset editing status for other products
      this.products.forEach(prod => prod.editing = false);
      product.editing = true;
      // Create a copy of the original data for editing
      product.editedName = product.name;
      product.editedDescription = product.description;
      product.editedPrice = product.price;
      this.editingProduct = product;
    },
    saveProduct(updatedProduct) {
      // Update the original product data with the edited values
      updatedProduct.name = updatedProduct.editedName;
      updatedProduct.description = updatedProduct.editedDescription;
      updatedProduct.price = updatedProduct.editedPrice;
      updatedProduct.editing = false;
      this.editingProduct = null;
      // You might want to dispatch an action to update the product in Vuex store
    },
    cancelEdit() {
      if (this.editingProduct) {
        this.editingProduct.editing = false;
        this.editingProduct = null;
      }
    },
    deleteProduct(product) {
      // Remove the product from the list
      const index = this.products.findIndex(p => p.id === product.id);
      if (index !== -1) {
        this.products.splice(index, 1);
      }
    },
      editProductFromButton(product) {
        // Triggered when the edit button is clicked
        this.editProduct(product);
    }
      
    },
  };
  </script>
  