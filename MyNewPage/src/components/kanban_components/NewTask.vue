<script>
import Store from "../../stores/kanban-store.js";

export default {
    name: "NewTask",
    data() {
        return {
            taskTitle: "",
        }
    },

    methods: {
        addNewTask() {
            if (this.taskTitle !== "") {
                Store.mutations.addNewTask(this.taskTitle);
                this.taskTitle = "";
            }
        }
    }
}
</script>

<template>
    <div>
        <input
            type="text"
            class="form-control"
            placeholder="Neue Aufgabe"
            v-model="taskTitle"
            @keyup.enter.exact="addNewTask()"/>
        <div class="d-grid my-2">
            <button class="btn btn-secondary" @click="addNewTask()">Eintragen</button>
        </div>
    </div>
</template>

<style scoped>

</style>