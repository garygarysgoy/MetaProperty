<template>
    <section class="hero">
        <div class="container">
            <h1 class="center title is-1 monopoly mt-5">Monopoly<span class="meta">Meta</span></h1>
            <h2 class="center subtitle is-5 monopoly"><span class="text-orange mr-2">BSC ON-CHAIN</span>METAVERSE GAMES</h2>
        </div>
        <div class="card">
            <div class="card-image">
                <figure class="image is-4by3 has-background-black">
                    <img src="@/assets/images/home-banner.png" alt="Placeholder image">
                </figure>
            </div>
        </div>
    </section>
    <section class="hero center">
        <div class="are-medium">
            <button class="button is-warning">BUY $MMDao</button>
            <button class="button is-success">Start Game</button>
            <button class="button is-success" @click="counter.count++">{{ counter.count }}</button>
        </div>
    </section>
</template>
  
<script setup lang="ts">
import { useCounterStore } from "@/stores/counter";

const counter = useCounterStore()
</script>
  
<style scoped>
.center {
    text-align: center !important;
    text-align: center;
    align-items: center;
    justify-items: center;
}

.monopoly {
    color: white;
    font-family: Georgia, 'Times New Roman', Times, serif
}

.meta {
    color: cornflowerblue;
}

.text-orange {
    color: orange;
}

.container {
    text-align: center;
    align-items: center;
    justify-items: center;
    width: 100%;
}</style>