<template>
  <div>
    <div class="d-flex">
      <div class="col-4 bg-light rounded shadow m-3 p-3">
        <div class="h4">TODO</div>
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
      tasks: [
        {
          id: 1,
          title: "スーパに買い物に行く",
        },
        {
          id: 2,
          title: "子供の迎えに行く",
        },
        {
          id: 3,
          title: "新聞を解約する",
        },
        {
          id: 4,
          title: "ゴミ出しをする",
        },
      ],
    };
  },
};
</script>

<style scoped></style>
