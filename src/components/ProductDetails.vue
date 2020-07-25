<template>
  <div class="container">
    <div class="row">
      <div class="col-md-6">
        <div class="product-wrap">
          <img src="https://via.placeholder.com/350x350" alt="product" />
        </div>
        <div class="product-scan d-flex mt-5">
          <div class="variant mx-1">
            <img src="https://via.placeholder.com/50x50" alt="variant" />
          </div>
          <div class="variant mx-1">
            <img src="https://via.placeholder.com/50x50" alt="variant" />
          </div>
          <div class="variant mx-1">
            <img src="https://via.placeholder.com/50x50" alt="variant" />
          </div>
        </div>
      </div>
      <div class="col-md-6">
        <div class="product-info">
          <p>Prouduct: G-shock 123</p>
          <p>Price: $233</p>
          <p>Price: $233</p>
          <p>Weight: 12kg</p>
          <p>Material: Leather</p>
          <p>In stock</p>
        </div>
        <div class="d-flex justify-content-between">
          <button type="button" class="btn btn-primary">Keep shopping</button>
          <button type="button" class="btn btn-primary">Checkout</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["id"]
};
</script>

<style>
</style>