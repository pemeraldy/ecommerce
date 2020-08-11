<template>
  <div>
    <div class="row">
      <div class="col-8 m-auto">
        <div v-if="success">
          <Jumbotron />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Jumbotron from "../components/Jumbotron";
export default {
  components: {
    Jumbotron,
  },
  data() {
    return {
      success: true,
    };
  },
};
</script>

<style>
</style>