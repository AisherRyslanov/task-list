<template>
  <div id="app">
    <div class="container">
    <header class="header">
      <nav>
        <router-link class="link" to="/">Task List</router-link>
        <router-link class="link" to="/create">Task Form</router-link>
      </nav>
    </header>
  </div>
    <router-view></router-view>
  </div>
</template>

<script>
import TaskList from "@/components/TaskList";
import TaskForm from "@/components/TaskForm";
export default {
  name: 'App',
  components: {TaskList, TaskForm},
  mounted() {
    const savedTasks = localStorage.getItem('tasks');
    if (savedTasks) {
      this.$store.commit('setTasks', JSON.parse(savedTasks));
    }

    window.addEventListener('beforeunload', this.saveTasksToLocalStorage);
  },
  beforeDestroy() {
    this.saveTasksToLocalStorage();
    window.removeEventListener('beforeunload', this.saveTasksToLocalStorage);
  },
  methods: {
    saveTasksToLocalStorage() {
      localStorage.setItem('tasks', JSON.stringify(this.$store.state.tasks));
    }
  }
};
</script>

<style>
*{
  margin: 0 auto;
  padding: 0;
  box-sizing: border-box;
}
.header{
  background: mediumseagreen;
  display: flex;
  padding: 10px;
}
.container {
  max-width: 100%;
  margin: 0 auto;
}
.link{
  color: white;
  text-decoration: none;
  font-size: 18px;
  padding: 20px;
  transition: .2s;
}
.link:hover{
  color: #d2cdcd;
}
</style>
