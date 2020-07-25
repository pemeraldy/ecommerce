<template>
  <div id="app">
    <Navbar />
    <h1 class="text-center display-4 my-4">Success Page</h1>
    <hr />
    <SuccessPage />
    <h1 class="text-center display-4 my-4">Cart Summary & Billing Page</h1>
    <hr />
    <Cart />
    <h1 class="text-center display-4 my-4">Product Details Page</h1>
    <hr />
    <ProductDetails />
  </div>
</template>

<script>
import Navbar from "./components/Navbar";
import SuccessPage from "./components/SuccessPage";
import Cart from "./components/Cart";
import ProductDetails from "./components/ProductDetails";

export default {
  name: "App",
  components: {
    SuccessPage,
    Cart,
    Navbar,
    ProductDetails
  }
};
</script>

<style>
</style>
