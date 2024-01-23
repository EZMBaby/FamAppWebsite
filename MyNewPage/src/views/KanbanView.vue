<script setup>
import StatusCard from "@/components/kanban_components/StatusCard.vue";
import KanbanStore from "@/stores/kanban-store.js";
import VueHeadline from "@/components/Vue-Headline.vue";

const tasks = KanbanStore.state.taskData
const statusCards = KanbanStore.state.statusCards

const filteredTasks = (status) => {
    return tasks.filter(task => task.status === status)
}
</script>

<template>
    <VueHeadline>
        Kanban Board
    </VueHeadline>
    <div class="container mt-5">
        <div class="row">
            <div class="col-4" v-for="statusCard in statusCards" :key="statusCard.status">
                <StatusCard
                    :title="statusCard.title"
                    :color="statusCard.color"
                    :status="statusCard.status"
                    :newTasks="statusCard.addTask"
                    :tasks="filteredTasks(statusCard.status)"
                />
            </div>
        </div>
    </div>
</template>

<style scoped>

.header-enter-from, .header-leave-to {
    letter-spacing:-.5em;
    filter:blur(12px);
    opacity:0;
}

.header-enter-active, .header-leave-active {
    transition: all .5s ease;
}
</style>