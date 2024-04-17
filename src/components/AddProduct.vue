<template>
  <div class="add-product-container">
    <h2>Add Product</h2>
    <form @submit.prevent="addProduct" class="add-product-form">
      <div class="form-group">
        <label for="name">Product Name</label>
        <input type="text" id="name" v-model="name" class="form-control" placeholder="Enter product name" required>
      </div>
      <div class="form-group">
        <label for="description">Description</label>
        <input type="text" id="description" v-model="description" class="form-control" placeholder="Enter product description" required>
      </div>
      <div class="form-group">
        <label for="price">Price</label>
        <input type="number" id="price" v-model.number="price" class="form-control" placeholder="Enter product price" min="0" required>
      </div>
      <div class="form-group">
        <button type="submit" class="btn-submit">Add Product</button>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      name: '',
      description: '',
      price: ''
    };
  },
  methods: {
    addProduct() {
      const product = {
        name: this.name,
        description: this.description,
        price: this.price
      };

      this.$store.dispatch('addProduct', product);

      // Reset form fields
      this.name = '';
      this.description = '';
      this.price = '';
    }
  }
};
</script>

<style scoped>
.add-product-container {
  max-width: 400px;
  margin: 0 auto;
}

.add-product-container h2 {
  text-align: center;
  margin-bottom: 20px;
}

.add-product-form .form-group {
  margin-bottom: 20px;
}

.add-product-form label {
  display: block;
  margin-bottom: 5px;
  font-weight: bold;
}

.add-product-form .form-control {
  width: 100%;
  padding: 10px;
  font-size: 16px;
  border: 1px solid #ddd;
  border-radius: 5px;
  box-sizing: border-box;
}


.add-product-form .btn-submit {
  width: 100%;
  padding: 10px;
  background-color: black;
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 16px;
}

.add-product-form .btn-submit:hover {
  background-color: green;
}
</style>
