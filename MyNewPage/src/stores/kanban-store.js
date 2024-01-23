import { statusCards } from './kanban-seed.js'
import { taskData } from './kanban-seed.js'
import { reactive } from 'vue'

const state = reactive({
    statusCards,
    taskData,
})

const getters = {

}

const mutations = {
    addNewTask(taskTitle) {
        state.taskData.push({
            status: 0,
            title: taskTitle
        })
    },

    moveTaskForward(task) {
        task.status += 1
    },

    moveTaskBackwards(task) {
        task.status -= 1
    },

    deleteTask(task) {
        state.taskData.splice(state.taskData.indexOf(task), 1)
    }
}

export default {
    state,
    getters,
    mutations
}