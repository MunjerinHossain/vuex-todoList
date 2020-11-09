<template>
  <div id="app" class="container">
    <h1 class="title"><i>Todos</i></h1>
    <todo-list></todo-list>
  </div>
</template>

<script>
import TodoList from "./components/TodoList";
export default {
  name: "App",
  components: {
    TodoList,
  },
};
</script>


<style>
* {
  box-sizing: border-box;
}
.title {
  display: inline-block;
  margin: 20px auto;
  height: 75px;
  padding: 20px 18px 0px 200px;
}
.container {
  max-width: 600px;
  margin: 0 auto;
}
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin-top: 60px;
  font-size: 24px;
}
</style>