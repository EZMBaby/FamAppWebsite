<script setup>
const props = defineProps({

})
</script>

<template>
    <transition name="header" appear>
        <div class="customFont header">
            <h1 class="display-1">
                <slot></slot>
            </h1>
        </div>
    </transition>
    <hr/>
</template>

<style scoped>
.customFont {
    font-family: Georgia, serif;
}

.header {
    text-align: center;
    padding-top: 50px;
    color: antiquewhite;
}

hr {
    margin: 0 auto;
    width: 50%;
    border: 2px solid #0f0f0f;
}
</style>