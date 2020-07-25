<template>
  <div class="container">
    <div class="row">
      <div class="col-md-8">
        <h3 class="mb-4">Your Order Breakdown</h3>
        <hr />
        <div class="d-flex product mb-3">
          <div class="product-img">
            <img src="https://via.placeholder.com/150x150" alt />
          </div>
          <div class="product-details d-flex align-items-center">
            <div class="product-name">Gucci Watch</div>
            <div class="product-quantity d-flex">
              <span class="minus">-</span>
              <span class="quantity">8</span>
              <span class="plus">+</span>
              <div class="sub-total">$2000</div>
            </div>
          </div>
        </div>

        <div class="d-flex product mb-3">
          <div class="product-img">
            <img src="https://via.placeholder.com/150x150" alt />
          </div>
          <div class="product-details d-flex align-items-center">
            <div class="product-name">Gucci Watch</div>
            <div class="product-quantity d-flex">
              <span class="minus">-</span>
              <span class="quantity">8</span>
              <span class="plus">+</span>
              <div class="sub-total">$2000</div>
            </div>
          </div>
        </div>

        <div class="d-flex product mb-3">
          <div class="product-img">
            <img src="https://via.placeholder.com/150x150" alt />
          </div>
          <div class="product-details d-flex align-items-center">
            <div class="product-name">Gucci Watch</div>
            <div class="product-quantity d-flex">
              <span class="minus">-</span>
              <span class="quantity">8</span>
              <span class="plus">+</span>
              <div class="sub-total">$2000</div>
            </div>
          </div>
        </div>
      </div>
      <!-- Billing Details -->
      <div class="col-md-4">
        <div class="card text-white bg-dark mb-3">
          <div class="card-header">
            <h3 class="card-title text-center">Billing Details</h3>
          </div>
          <div class="card-body">
            <div class="details">
              <h5 class="text-white">Address Details</h5>
              <p>Lorem ipsum, dolor sit amet consectetur adipisicing.</p>
              <h5 class="text-white">Delivery Method</h5>
              <div class="form-group">
                <div class="custom-control custom-radio">
                  <input
                    type="radio"
                    id="DoorDelivery"
                    name="customRadio"
                    class="custom-control-input"
                    checked
                  />
                  <label class="custom-control-label" for="DoorDelivery">Door Delivery</label>
                </div>
                <div class="custom-control custom-radio">
                  <input type="radio" id="pickUp" name="customRadio" class="custom-control-input" />
                  <label class="custom-control-label" for="pickUp">
                    Or pickup at the
                    <i class="fas fa-chair-office"></i>office
                  </label>
                </div>
              </div>
            </div>
            <button type="button" class="btn btn-primary btn-lg btn-block">Checkout</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style>
</style>