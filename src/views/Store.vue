<template>
  <div class="container-fluid">
    <div class="row">
      <div class="col-md-12">
        <div class="filterbar">
          <h3 class="text-center">Filter Bar</h3>
        </div>
      </div>
    </div>
    <div class="row">
      <div class="col-md-3">
        <div class="card text-white bg-primary mb-3" style="max-width: 20rem;">
          <div class="card-header">
            <h4 class="text-white text-center">Categories</h4>
          </div>
          <div class="card-body">
            <div class="list-group">
              <a href="#" class="bg-dark text-white list-group-item list-group-item-action">
                <i class="fas fa-air-freshener"></i> Latest
              </a>
              <a href="#" class="bg-dark text-white list-group-item list-group-item-action">
                <i class="fa fa-child" aria-hidden="true"></i> Children
              </a>
              <a href="#" class="bg-dark text-white list-group-item list-group-item-action">Smart</a>

              <a href="#" class="bg-dark text-white list-group-item list-group-item-action">Digital</a>

              <a href="#" class="bg-dark text-white list-group-item list-group-item-action">Analogue</a>
            </div>
          </div>
        </div>
      </div>
      <div class="col-md-9"></div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
// import Navbar from "@/components/Navbar";
export default {
  name: "Home",
  components: {
    // Navbar,
  },
};
</script>
