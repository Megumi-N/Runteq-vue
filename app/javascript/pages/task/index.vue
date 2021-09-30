<template>
  <div>
    <div class="d-flex">
      <div class="col-4 bg-light rounded shadow m-3 p-3">
        <div class="h4">TODO</div>
        <ul>
          <li v-for="data in tasks" :key="data.id">
            {{ data.title }}
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
    this.fetchTasks();
  },

  methods: {
    fetchTasks() {
      this.$axios
        .get("tasks")
        .then((res) => (this.tasks = res.data))
        .catch((err) => console.log(err.status));
    },
  },
};
</script>

<style scoped></style>
