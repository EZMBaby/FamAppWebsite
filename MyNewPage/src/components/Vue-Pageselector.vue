<script setup>
import {RouterLink} from "vue-router";
import router from "../router/index.js";
import {nextTick} from "vue";
const changeActive = (target) => {
    const links = document.querySelectorAll('.link-box')
    const newActive = document.getElementById(target)
    links.forEach(link => {
        link.classList.remove('active')
    })
    newActive.classList.add('active')
}

let currentRoute = "none"

async function init() {
    await new Promise(r => setTimeout(r, 200));
    await nextTick();
    currentRoute = "" + router.currentRoute.value.name
}

const allRoutes = router.options.routes

init()
    .then(() => {
    document.getElementById(currentRoute).classList.add('active')
    console.log(currentRoute)
})
</script>

<template>
    <div class="selector">
        <div v-for="route in allRoutes" :key="route.path" :id="route.name" class="link-box">
            <RouterLink class="link" @click="changeActive(route.name)" :to="route.path">{{ route.name.toUpperCase() }}</RouterLink>
        </div>
    </div>
</template>

<style scoped>
.selector {
    height: 50px;

    display: flex;
    justify-content: center;
    align-items: end;

    border-bottom: 1px solid black;
}

.link-box {
    border: 2px solid black;
    height: 80%;
    padding: 0 10px;
    margin: 0 10px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1.5rem;

    border-top-left-radius: 10px;
    border-top-right-radius: 10px;

    transition: all 0.3s ease-out;
}

.link {
    text-decoration: none;
    color: antiquewhite;
    font-weight: bold;
}

.active {
    border-bottom: 0;
    background: rgba(255, 255, 255, 0.3);
    box-shadow: 0 -3px 5px rgb(194, 194, 194);
    transform: scale(1.2);
}
</style>