<template>
  <div id="app">
    <SuccessPage />
    <Cart />
  </div>
</template>

<script>
import SuccessPage from "./components/SuccessPage";
import Cart from "./components/Cart";

export default {
  name: "App",
  components: {
    SuccessPage,
    Cart
  }
};
</script>

<style>
</style>
