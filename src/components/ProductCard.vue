<template>
  <div class="card text-left mt-2">
    <img class="card-img-top" src="https://via.placeholder.com/300x300" alt />
    <div class="card-body bg-dark">
      <h4 class="card-title">
        <router-link :to="{name:'product', params:{id:33}}">Producr Name</router-link>
      </h4>
      <p class="card-text">
        <strong>$24</strong>
      </p>
    </div>
  </div>
</template>

<script>
export default {
  props: ["id"],
};
</script>

<style>
</style>