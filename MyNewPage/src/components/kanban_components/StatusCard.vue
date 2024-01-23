<script setup>
import Task from "./Task.vue";
import NewTask from "./NewTask.vue";

const props = defineProps({
    title: {
        type: String,
        required: true
    },
    color: {
        type: String,
        required: true
    },
    status: {
        type: Number,
        required: true
    },
    newTasks: {
        type: Boolean,
        required: true
    },
    tasks: {
        type: Array,
    }
})
</script>

<template>
        <div class="card">
            <div class="card-header text-center text-white" :class="color">
                <h4 class="customFont">{{ title }}</h4>
            </div>
            <div class="card-body">
                <Task v-for="task in tasks" :key="task.id" :task="task"/>
            </div>
            <div v-if="newTasks" class="card-footer">
                <NewTask />
            </div>
        </div>
</template>

<style scoped>
.card {
    background: #313131;
    border: 2px outset #0f0f0f;
}
</style>