<template>
    <div class="container">
        <h1>Add New Doctore</h1>
        <div id="stepProgressBar">
            <div class="step">
                <p class="step-text">General</p>
                <div class="bullet">1</div>
            </div>
            <div class="step">
                <p class="step-text">Image</p>
                <div class="bullet">2</div>
            </div>
            <div class="step">
                <p class="step-text">Hospital</p>
                <div class="bullet">3</div>
            </div>
            <div class="step">
                <p class="step-text">SocialMedia</p>
                <div class="bullet">4</div>
            </div>
            <div class="step">
                <p class="step-text">MedicalDevice</p>
                <div class="bullet">5</div>
            </div>
            <div class="step">
                <p class="step-text">Clinic</p>
                <div class="bullet">6</div>
            </div>
            <div class="step">
                <p class="step-text">Specialty</p>
                <div class="bullet">7</div>
            </div>
            <div class="step">
                <p class="step-text">Appointment</p>
                <div class="bullet">8</div>
            </div>
        </div>
        <div id="main">
            <p id="content">General</p>
            <button id="previousBtn" @click="previousbtn()" disabled>
                Previouse
            </button>
            <button id="nextBtn" @click="nextbtn()">Next</button>
            <button id="addBtn" @click="addbtn()" disabled>Add</button>
        </div>
    </div>
</template>

<script>
const MAX_STEPS = 8;
let currentStep = 1;
export default {
    name: 'navAdd',
    methods: {
        // previousbtn() {},
        nextbtn() {
            const previousBtn = document.getElementById('previousBtn');
            const nextBtn = document.getElementById('nextBtn');
            const addBtn = document.getElementById('addBtn');
            const content = document.getElementById('content');

            const bullets = [...document.querySelectorAll('.bullet')];
            const currentBullet = bullets[currentStep - 1];
            currentBullet.classList.add('completed');
            currentStep++;
            previousBtn.disabled = false;
            if (currentStep === MAX_STEPS) {
                nextBtn.disabled = true;
                addBtn.disabled = false;
            }
            content.innerText = `Step ${currentStep}`;
        },
        // addbtn() {},
    },
};
</script>

<style scoped>
.hidden {
    display: none;
}
button {
    padding: 5px 10px;
    border: 1px solid black;
    transition: 250ms background-color;
}
button:hover {
    cursor: pointer;
    background-color: black;
    color: white;
}
button:disabled:hover {
    opacity: 0.6;
    cursor: not-allowed;
}
.text-center {
    text-align: center;
}
.container {
    max-width: 400px;
    margin: 20px auto 0 auto;
    padding: 20px;
}
#stepProgressBar {
    display: flex;
    width: 300px;
    margin: 0 auto;
    margin-bottom: 40px;
    justify-content: space-between;
    align-items: flex-end;
}
.step {
    text-align: center;
    justify-content: space-between;
    margin: 0 20px;
}
.step-text {
    margin-bottom: 10px;
    color: #28a745;
}
.bullet {
    height: 20;
    width: 20px;
    border-radius: 100%;
    border: 1px solid #28a745;
    color: #28a745;
    display: inline-block;
    position: relative;
    transition: background-color 500ms;
    line-height: 20px;
}
.bullet.completed {
    color: white;
    background-color: #28a745;
}
.bullet.completed::after {
    content: '';
    position: absolute;
    height: 1px;
    width: 54px;
    background-color: #28a745;
    right: -60px;
    bottom: 10px;
}
</style>
