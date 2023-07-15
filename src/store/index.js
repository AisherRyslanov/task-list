import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const store = new Vuex.Store({
    state: {
        tasks: []
    },
    mutations: {
        addTask(state, task) {
            state.tasks.push(task);
        },
        updateTask(state, { index, task }) {
            Vue.set(state.tasks, index, task);
        },
        deleteTask(state, index) {
            state.tasks.splice(index, 1);
        }
    }
});

export default store;


