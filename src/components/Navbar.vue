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

      <div class="btn-group ml-auto" role="group" aria-label="Button group with nested dropdown">
        <button type="button" class="btn btn-warning">Cart</button>
        <div class="btn-group show" role="group">
          <button
            id="btnGroupDrop1"
            type="button"
            class="btn btn-primary dropdown-toggle"
            data-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="true"
          ></button>
          <div
            class="dropdown-menu"
            style="position: absolute; transform: translate3d(0px, 48px, 0px); top: 0px; left: 0px; will-change: transform;"
            aria-labelledby="btnGroupDrop1"
            x-placement="bottom-start"
          >
            <a class="dropdown-item">Item 1</a>
            <a class="dropdown-item">Item 1</a>
          </div>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
export default {};
</script>

<style>
</style>