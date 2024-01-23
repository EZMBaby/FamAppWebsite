<script>
import Store from "../../stores/kanban-store.js";
export default {
    name: "TaskComponent",
    props: {
        task: {
            type: Object,
        }
    },

    computed: {
        movableRight() {
            return this.task.status === 2
        },
        movableLeft() {
            return this.task.status === 0
        }
    },

    methods: {
        moveForward() {
            Store.mutations.moveTaskForward(this.task);
        },
        moveBackwards() {
            Store.mutations.moveTaskBackwards(this.task);
        },
        deleteTask() {
            Store.mutations.deleteTask(this.task);
        }
    }
}
</script>

<template>
    <transition name="fadeIn" appear>
        <div class="alert alert-secondary d-flex justify-content-between">
            <strong class="h4 customFont">{{ task.title }}</strong>
            <div>
                <a
                    v-if="!movableLeft"
                    role="button"
                    class="btn btn-outline-success m-1"
                    @click="moveBackwards">
                    <-
                </a>
                <a
                    role="button"
                    class="btn btn-outline-danger m-1"
                    @click="deleteTask">
                    X
                </a>
                <a
                    v-if="!movableRight"
                    role="button"
                    class="btn btn-outline-success m-1"
                    @click="moveForward">
                    ->
                </a>
            </div>
        </div>
    </transition>
</template>

<style scoped>
    .fadeIn-enter-from, .fadeIn-leave-to {
        opacity: 0;
        transform: translateY(50%) scale(0.5);
    }

    .fadeIn-enter-active, .fadeIn-leave-active {
        transition: all 0.3s ease-out;
    }
</style>