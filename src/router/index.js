import { createRouter, createWebHistory } from 'vue-router'
import AddProduct from '../components/AddProduct.vue'
import ProductList from '../components/ProductList.vue'

const routes = [
  {
    path: '/',
    name: 'ProductList', // Route name for ProductList.vue
    component: ProductList
  },
  {
    path: '/add-product',
    name: 'AddProduct', // Route name for AddProduct.vue
    component: AddProduct
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

export default router;
