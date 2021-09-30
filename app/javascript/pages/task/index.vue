<template>
  <div>
    <div class="d-flex">
      <div class="col-4 bg-light rounded shadow m-3 p-3">
        <div class="h4">TODO</div>
        <ul>
          <li v-for="(value, key, index) in tasks" :key="index">
            {{ tasks[key].title }}
          </li>
        </ul>
      </div>
      <div class="tex-center">
        <router-link :to="{ name: 'TopIndex' }" class="btn btn-dark mt-5"
          >戻る</router-link
        >
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "TaskIndex",
  data() {
    return {
      tasks: [],
    };
  },
  created() {
    const axios = require("axios");
    axios
      .get("http://localhost:3000/api/tasks")
      .then((response) => (this.tasks = response.data));
  },
};
</script>

<style scoped></style>
