<template>
  <nav class="navbar navbar-expand-lg navbar-dark bg-primary">
    <a class="navbar-brand" href="#">Yopeez</a>
    <button
      class="navbar-toggler"
      type="button"
      data-toggle="collapse"
      data-target="#navbarColor01"
      aria-controls="navbarColor01"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span class="navbar-toggler-icon"></span>
    </button>

    <div class="collapse navbar-collapse" id="navbarColor01">
      <ul class="navbar-nav mr-auto">
        <li class="nav-item">
          <router-link class="nav-link" to="/">Home</router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link" to="/product">Features</router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link" to="/checkout">Pricing</router-link>
        </li>
        <li class="nav-item">
          <router-link to="/about" class="nav-link">About</router-link>
        </li>
      </ul>
      <form class="form-inline my-2 my-lg-0">
        <input class="form-control mr-sm-2" type="text" placeholder="Search" />
      </form>

      <div class="btn-group ml-auto" role="group">
        <div class="btn-group" role="group">
          <button
            @click="showCartContent = !showCartContent"
            id="cartContent"
            type="button"
            class="btn btn-primary dropdown-toggle"
          >
            <i class="fas fa-cart-plus fa-2x"></i>
          </button>
          <div v-if="showCartContent" class="dropdown-menu show" x-placement="bottom-start">
            <div class="list-group">
              <a
                href="#"
                class="list-group-item list-group-item-action flex-column align-items-start bg-dark"
              >
                <h5 class="text-warning">Cart Items</h5>
                <div class="d-flex w-100 justify-content-between">
                  <p class="mb-1 text-white">
                    Gucci Leather x
                    <span class="qnatity">1</span>
                  </p>
                  <small class="text-white">
                    <i class="fas fa-trash"></i>
                  </small>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  data() {
    return {
      showCartContent: false,
    };
  },
};
</script>

<style scoped>
.dropdown-menu {
  position: absolute;
  transform: translate3d(0px, 48px, 0px);
  top: 0px;
  right: 0px;
  left: auto;
  will-change: transform;
  width: 300px;
  padding: 0;
}
</style>