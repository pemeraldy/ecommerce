<template>
  <div>
    <Navbar />
    <div class="row">
      <div class="col-8 m-auto">
        <Jumbotron />
      </div>
    </div>
  </div>
</template>

<script>
import Jumbotron from "./Jumbotron";
import Navbar from "./Navbar";
export default {
  components: {
    Jumbotron,
    Navbar
  }
};
</script>

<style>
</style>