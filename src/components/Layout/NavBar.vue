<template>
    <nav class="navbar has-background-black" role="navigation" aria-label="main navigation">
        <div class="navbar-brand">
            <a class="navbar-item" href="#">
                <img src="@/assets/images/logo1.png" class="icon-logo">
            </a>
          
            <a role="button" class="navbar-burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
                <img src="@/assets/images/menu.png" class="icon-menu">
            </a>
          
        </div>

        <div id="navbarBasicExample" class="navbar-menu">
            <div class="navbar-menu is-active">
                <RouterLink class="navbar-item" to="/">Home</RouterLink>
                <RouterLink class="navbar-item" to="/game">Game</RouterLink>
                <RouterLink class="navbar-item" to="/bank">Bank</RouterLink>
                <RouterLink class="navbar-item" to="/market">Market</RouterLink>
                <RouterLink class="navbar-item" to="/promote">Promote</RouterLink>
                <RouterLink class="navbar-item" to="/test">Test {{ counter.masked }}</RouterLink>
                
            </div>
            <div class="navbar-end">
                <div class="navbar-item">
                    <div class="buttons">
                        <a class="icon1"><img src="@/assets/images/gift.gif"></a>
                        <a class="icon"><img src="@/assets/images/glob.png"></a>
                        <div>
                            <div v-if="counter.isLogin" class="masked">{{ counter.masked }}</div>
                            <a v-else @click="connectMetamask"><img src="@/assets/images/connect.png" alt=""></a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </nav>


    <!-- <div class="container">
        <button @click="state.showModal = true">Open Modal Form</button>
    </div> -->

    <div class="modal-container" v-if="state.showModal">
        <div class="modal-content">
            <div class="close"></div>
            <h2 class="modal-title">Password</h2>
            <button class="close-icon" @click="state.showModal = false">
                <img src="@/assets/images/x.png">
            </button>
            <form>
                <div class="modal-body">
                    <p v-if="state.message" class="text-red">
                        {{ state.message }}
                        <button type="button" class="button is-success mt-4" @click="doOk">Confirm</button>
                    </p>
                    <div v-if="state.message !== 'Need to connect metamask'">
                        Wallet: <span class="masked">{{ counter.masked }}</span>
                        <input type="password" id="password" class="input" v-model="state.password"
                            placeholder="Please enter login password"><br>
                        <p class="is-size-6">Please remember to set the password for the first time!</p>
                        <button type="button" class="button is-success mt-4" @click="doLogin">Confirm</button>
                    </div>
                </div>
            </form>
        </div>
    </div>
</template>


<script setup>
import { reactive } from 'vue';
import { useCounterStore } from '@/stores/counter'

import Web3 from 'web3';

const counter = useCounterStore()

const { ethereum } = window;

const state = reactive({
    account: null,
    maskedAccount: null,
    showModal: false,
    password: null,
    isLogin: false,
    message: null
});

document.addEventListener('DOMContentLoaded', () => {

// Get all "navbar-burger" elements
const $navbarBurgers = Array.prototype.slice.call(document.querySelectorAll('.navbar-burger'), 0);

// Add a click event on each of them
$navbarBurgers.forEach( el => {
  el.addEventListener('click', () => {

    // Get the target from the "data-target" attribute
    const target = el.dataset.target;
    const $target = document.getElementById(target);

    // Toggle the "is-active" class on both the "navbar-burger" and the "navbar-menu"
    el.classList.toggle('is-active');
    $target.classList.toggle('is-active');

  });
});

});
async function connectMetamask() {
    if (typeof ethereum !== 'undefined') {
        try {
            await ethereum.request({ method: 'eth_requestAccounts' });

            const web3 = new Web3(ethereum);
            const accounts = await web3.eth.getAccounts();

            counter.account = accounts[0];
            counter.masked = counter.account.slice(0, 4) + "..." + counter.account.slice(-4);

            ethereum.on('accountsChanged', function (accounts) {
                console.log('Metamask account changed:', state.account, '->', accounts[0]);
                counter.account = accounts[0];
                counter.masked = counter.account.slice(0, 4) + "..." + counter.account.slice(-4);
                counter.isLogin = false;
            });
            state.showModal = true;

        } catch (error) {
            console.log("Error", error.message);
            state.message = "Need to connect metamask"
            state.showModal = true;
        }
    } else {
        alert('Please install Metamask to use this feature.');
    }
}

function doLogin() {
    if (state.password == null) {
        state.message = "Please enter password";
    } else {
        counter.isLogin = true;
        state.showModal = false; // hide the modal form after submission
        state.password = null;
        state.message = null
    }
}

function doOk() {
    state.showModal = false; // hide the modal form after submission
}
    // function openModal() {
    //    document.getElementById('modal').style.display='block';
    // }

    // function closeModal() {
    //   document.getElementById('myModal').style.display='none';
    // }


</script>

<style>
/* @import "@/assets/css/debug.css"; */


.icon {
    width: 28px;
    height: 28px;
    margin-right: 20px;
}

.icon1 {
    width: 35px;
    height: 35px;
    margin-right: 20px;
}

.icon-menu {
    margin-top: 10px;
    width: 30px;
    height: 30px;
    margin-right: 30px;
}

.wallet {
    color: orange;
}

.content {
    min-height: 100vh;
    padding: 20px;
    background: #000000;
}

.container {
    max-width: 800px;
}

.modal-container {
    position: fixed;
    z-index: 999;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    display: flex;
    justify-content: center;
    align-items: center;
}

.modal-content {
    background: none;
    padding: 20px !important;
    height: 300px !important;
    width: 320px !important;
    padding: 5px;
    border-radius: 5px;
    background-image: url('@/assets/images/modal-bg.png');
    background-size: cover;
    display: flex;
    justify-content: center;
    align-items: center;
}

.modal-body {
    margin-top: 0px;
    background: none;
}

.modal-title {
    position: absolute;
    color: white;
    font-size: 150%;
    top: 0;
    left: 50%;
    transform: translateX(-50%);
    margin-top: 0px;
}

.input {
    width: 100%;
    color: red;
}

.close-icon {
    background: none;
    border: none;
    cursor: pointer;
    position: absolute;
    top: 0px;
    right: 0px;
    width: 50px;
    height: 50px;
    padding: 0px;
}

.text-red {
    color: red;
}

body {
    background-color: black;
    min-height: 100vh;
}

.navbar {
    position: fixed;
    top: 0;
    left: 5vw;
    width: 90vw;
}

.icon-logo {
    max-height: 2.5rem !important;
    width: 50px;
    height: 50px;
    padding: 0;
    margin: 0;
}
.center {
    text-align: center;
}
.card-body {
    border-radius: .5rem;
    background: rgba(255, 255, 255, 0.1);
    padding: 30px;
    margin-top: 30px;
    margin-bottom: 0px;
    text-align: center;
}
.masked {
    color: orange;
}
</style>