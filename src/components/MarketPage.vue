<template>
    <div class="hero card">
      <div class="card-image">
        <figure class="image is-4by2 container">
          <img src="@/assets/images/market-banner.jpg" alt="Placeholder image">
        </figure>
      </div>
    </div>
  
    <section class="hero container">
      <div class="card">
        <div class="card-body">
          <div class="are-medium">
            <button class="button is-warning">Transfer In</button>
            <button class="button is-success">Transfer Out</button>
          </div>
        </div>
      </div>
    </section>
  
    <section class="hero container">
  
      <div class="card border">
        <div class="columns">
          <div class="column">Sale</div>
          <div class="column">Quantity</div>
          <div class="column">Time</div>
          <div class="column">Operation</div>
        </div>
      </div>
      </section>

  </template>
  
  <script setup lang="ts">
  </script>
  
  <style scoped>
  .border {
    line-height: 60px;
    margin-top: 10px;
    border: 1px solid white;
    text-align: center;
    height: 200px;
  }
  </style>