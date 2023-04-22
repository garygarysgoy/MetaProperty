<template>
  <div class="hero card">
    <div class="card-image">
      <figure class="image is-4by2 container">
        <img src="@/assets/images/bank-banner.png" alt="Placeholder image">
      </figure>
    </div>
  </div>

  <section class="hero container">
    <div class="card">
      <div class="card-body">
        <h5 class="card-title">Demand Deposit</h5>
        <p class="card-text">$ M M G</p>
        <p class="subtitle">100.00</p>
        <div class="columns">
          <div class="column"></div>
          <div class="column">Yesterday Income<br>100</div>
          <div class="column">Accumulated Income<br>200</div>
          <div class="column"></div>
        </div>
        <div class="are-medium">
          <button class="button is-warning">Transfer In</button>
          <button class="button is-success">Transfer Out</button>
        </div>
      </div>
    </div>
  </section>

  <section class="hero mt-6">
    <div class="container center">
      <h1 class="title">Periodic Plan</h1>
      <button class="button is-warning">Transfer In</button>
    </div>

  </section>
  <section class="hero container">

    <div class="card border">
      <div class="columns">
        <div class="column">Plan I</div>
        <div class="column">Cycle: 10</div>
        <div class="column">0.60% / Day</div>
        <div class="column">
          <button class="button is-success">Join</button>          
        </div>
      </div>
    </div>

    <div class="card border">
      <div class="columns">
        <div class="column">Plan I</div>
        <div class="column">Cycle: 10</div>
        <div class="column">0.60% / Day</div>
        <div class="column">
          <button class="button is-success">Join</button>          
        </div>
      </div>
    </div>

    <div class="card border">
      <div class="columns">
        <div class="column">Plan I</div>
        <div class="column">Cycle: 10</div>
        <div class="column">0.60% / Day</div>
        <div class="column">
          <button class="button is-success">Join</button>          
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
</script>

<style scope>
.border {
  height: 70px;
  margin-top: 10px;
  border: 1px solid white;
  text-align: center;
  align-items: center;
}
</style>