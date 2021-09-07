<template>
  <div id="app">
    <div class="d-flex flex-column min-vh-100">
      <header
        class="mb-auto"
        >
        <nav class="navbar navbar-expand navbar-dark bg-dark justify-content-between">
          <span class="navbar-brand mb-0 h1">タスク管理アプリ</span>
          <ul class="navbar-nav">
            <li class="nav-item active"></li>
            <li class="nav-item active"></li>
          </ul>
        </nav>
      </header>
      <div class="text-center">
        <h3>{{ message }}</h3>
        <div class="mt-4">生活や仕事に関するタスクを見える化して抜け漏れを防ぎましょう。</div>
        <button type="button" class="btn btn-dark mt-5">はじめる</button>
      </div>
      <footer class="text-center mt-auto">
        <small>Copyright © 2020. RUNTEQ</small>
      </footer>
    </div>
  </div>
</template>

<script>
export default {
  data: function () {
    return {
      message: "タスクを管理しよう！",
    };
  },
};
</script>

<style scoped>

.navbar {
  position: relative;
  padding: .5rem 1rem;
}
span{
  color: white;
}
</style>
