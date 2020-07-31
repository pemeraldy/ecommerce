<template>
  <div id="app">
    <!-- <Home /> -->
    <Navbar />
    <div class="main-conten mt-4">
      <router-view />
    </div>
  </div>
</template>

<script>
// import Home from "./views/Home";
import Navbar from "@/components/Navbar";
export default {
  components: {
    // Home,
    Navbar,
  },
};
</script>
<style>
</style>
