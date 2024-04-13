<template>
  <div>
    <button @click="confirmDelete">Delete</button>
  </div>
</template>

<script>
export default {
  methods: {
    confirmDelete() {
      if (confirm("Are you sure you want to delete this product?")) {
        this.$emit("delete");
      }
    }
  }
};
</script>

<style scoped>
/* Add your scoped CSS styles here */
</style>
