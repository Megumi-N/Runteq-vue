<template>
  <div>
    <div class="d-flex flex-column min-vh-100">
      <TheHeader class="mb-auto" />
      <router-view />
      <TheFooter class="mt-auto" />
    </div>
  </div>
</template>

<script>
import TheHeader from "./components/TheHeader.vue";
import TheFooter from "./components/TheFooter.vue";

export default {
  components: {
    TheHeader,
    TheFooter,
  },
};
</script>
