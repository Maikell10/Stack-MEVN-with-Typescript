<template>
    <nav class="navbar navbar-expand-lg navbar-dark bg-primary">
        <div class="container">
            <router-link to="/" class="navbar-brand"
                >Vue Typescript</router-link
            >
            <div class="">
                <ul class="navbar-nav">
                    <li class="nav-item">
                        <router-link to="/" class="nav-link">tasks</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link to="/tasks/new" class="nav-link"
                            >create task</router-link
                        >
                    </li>
                </ul>
            </div>
        </div>
    </nav>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
    name: "Navbar-Component",
});
</script>