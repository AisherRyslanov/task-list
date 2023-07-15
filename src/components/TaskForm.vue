<template>
  <div class="TaskForm">
    <h2 class="create">Create Task</h2>
    <form class="form" @submit.prevent="addTask">
      <input class="inp" type="text" v-model="newTask" placeholder="Enter task title" required>
      <button class="btn" type="submit">Add Task</button>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      newTask: ''
    };
  },
  methods: {
    addTask() {
      const task = {
        title: this.newTask,
        completed: false
      };
      this.$store.commit('addTask', task);
      this.newTask = '';
    }
  }
};
</script>
<style>
.TaskForm{
  display: flex;
  flex-direction: column;
}
.create{
  color: mediumseagreen;
  padding: 10px 0 0 0;
  font-size: 31px;
}
.form{
  padding: 10px 0;
}
.inp{
  border: 1px solid mediumseagreen;
  width: 200px ;
  height: 30px;
  color: mediumseagreen;
}
.btn{
  width: 70px ;
  height: 30px;
  color: white;
  background: mediumseagreen;
  transition: .2s;
  border: 1px solid mediumseagreen;
}
.btn:hover{
  color: mediumseagreen;
  background: white;
}
</style>