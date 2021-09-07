<template>
  <div>
    <div class="d-flex flex-column min-vh-100">
      <Header />
      <router-view />
      <Footer />
    </div>
  </div>
</template>

<script>
import Header from "./components/TheHeader.vue";
import Footer from "./components/TheFooter.vue";

export default {
  components: {
    Header,
    Footer,
  },
};
</script>
