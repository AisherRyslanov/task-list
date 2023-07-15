<template>
  <div class="mainLists">
    <h2 class="lists">Task List</h2>
    <ul>
      <p class="li" v-for="(task, index) in tasks" :key="index">
        {{ task.title }}
        <button class="edit" @click="editTask(index)">Edit</button>
        <button class="del" @click="deleteTask(index)">Delete</button>
      </p>
    </ul>
  </div>
</template>
<script>
export default {
  computed: {
    tasks() {
      return this.$store.state.tasks;
    }
  },
  mounted() {
    const savedTasks = localStorage.getItem('tasks');
    if (savedTasks) {
      this.$store.commit('setTasks', JSON.parse(savedTasks));
    }
  },
  methods: {
    deleteTask(index) {
      this.$store.commit('deleteTask', index);
    },
    editTask(index) {
      const newTitle = prompt('Enter a new title for the task:', this.tasks[index].title);
      if (newTitle && newTitle.trim() !== '') {
        this.$store.commit('updateTaskTitle', { index, title: newTitle });
        this.tasks[index].title = newTitle;
      }
    }

  }
};
</script>
<style>
.mainLists{
  display: flex;
  flex-direction: column;
}
.lists{
  color: mediumseagreen;
  padding: 10px 0 0 0;
  font-size: 31px;
}
.li{
  font-size: 20px;
  padding: 10px;
  margin: 10px ;
  border: 1px solid mediumseagreen;
}
.edit{
  color: white;
  background: mediumseagreen;
  margin: 0 20px;
  width: 40px;
  height: 20px;
  border: none;
  text-align: center;
}
.del{
  height: 20px;
  width: 40px;
  color: white;
  background: red;
  border: none;
  text-align: center;
}
</style>

