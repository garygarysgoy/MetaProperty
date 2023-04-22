<template>
    <section class="container">
        <div class="card">
            <div class="card-body">
                <h5 class="card-title">$MMG</h5>
                <p class="card-text">100.00</p>
                <div class="are-medium">
                    <button class="button is-info">Deposit</button>
                    <button class="button is-success">Transfer</button>
                    <button class="button is-danger">Sale</button>
                </div>
            </div>
        </div>
    </section>

    <div class="container">
        <div v-for="item in mylist" class="item" :key="item">
            <div class="card flat mt-5" :class="item.type">
                <div class="card-body1">
                    <p class="text-type">{{ item.type }}</p>
                    <p class="">Price: {{ item.price }}</p>
                    <p class="">Profit: {{ item.profit }}</p>
                    <p class="">Cycle: {{ item.cycle }}</p>
                    <button class="button" :class="'btn-' + item.button">{{ item.button }}</button>
                </div>
            </div>
        </div>
        <br><br>
    </div>
</template>

<script>
export default {
    data() {
        return {
            mylist: [{
                type: "FLATS",
                price: "100u",
                profit: "1.50%",
                cycle: "200 Days",
                button: "Collected"
            }, {
                type: "HOUSE",
                price: "300u",
                profit: "1.70%",
                cycle: "200 Days",
                button: "Collected"
            }, {
                type: "VILLA",
                price: "1000u",
                profit: "1.90%",
                cycle: "200 Days",
                button: "Collect"
            }, {
                type: "HOTEL",
                price: "3000u",
                profit: "2.10%",
                cycle: "200 Days",
                button: "Buy"
            }, {
                type: "OFFICE",
                price: "10000u",
                profit: "2.30%",
                cycle: "200 Days",
                button: "Locked"
            }, {
                type: "BANK",
                price: "30000u",
                profit: "2.50%",
                cycle: "200 Days",
                button: "Locked"
            }],
            showPassword: true,
            showPasswordAgain: true,
            errorMessage: '',
            password: {
                oldPassword: '',
                newPassword: '',
                passwordConfirmation: ''
            },
        }
    },
    methods: {
        closeModal() {
            document.getElementById('modal').style.display = 'none';
        },
        openModal() {
            document.getElementById('modal').style.display = 'block';
        }
    }

}
</script>
<style>
/* @import "@/assets/css/debug.css"; */
.card {
    background: none;
}
.card-body {
    border-radius: .5rem;
    background: rgba(255, 255, 255, 0.1);
    padding: 30px;
    margin-top: 30px;
    margin-bottom: 0px;
    text-align: center;
}

.card-body1 {
    width: 80%;
    padding: 20px;
    border-radius: .5rem;
    background: none;
    color: white;
}

.FLATS {
    height: 220px;
    background-image: url('@/assets/images/flat.png');
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    border-radius: 0.48rem;
}

.HOUSE {
    height: 220px;
    background-image: url('@/assets/images/house.png');
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    border-radius: 0.48rem;
}

.VILLA {
    height: 220px;
    background-image: url('@/assets/images/villa.png');
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    border-radius: 0.48rem;
}

.HOTEL {
    height: 220px;
    background-image: url('@/assets/images/hotel.png');
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    border-radius: 0.48rem;
}

.OFFICE {
    height: 220px;
    background-image: url('@/assets/images/office.png');
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    border-radius: 0.48rem;
}

.BANK {
    height: 220px;
    background-image: url('@/assets/images/bank.png');
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    border-radius: 0.48rem;
}

.text-left {
    text-align-last: left;
}

.text-type {
    font-size: 180%;
    font-weight: 500;
    font-style: italic;
    margin-bottom: 5px;
}

.btn-Locked {
    background: none;
    border: 1px solid white;
    color: black;
    font-weight: 600;
    font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
    margin-top: 15px;
    width: 150px;
    color: white;
}

.btn-Collect {
    background: orange;
    border: 0px;
    color: black;
    font-weight: 600;
    font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
    margin-top: 15px;
    width: 150px;
}

.btn-Collected {
    background: silver;
    border: 0px;
    color: black;
    font-weight: 600;
    font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
    margin-top: 15px;
    width: 150px;
}

.btn-Buy {
    background: green;
    border: 0px;
    color: black;
    font-weight: 600;
    font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
    margin-top: 15px;
    width: 150px;
}

.button {
    width: 120px;
    margin:10px 5px;
}
</style>