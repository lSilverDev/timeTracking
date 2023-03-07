const control = document.querySelectorAll("#card");
const daily = document.getElementById("daily");
const weekly = document.getElementById("weekly");
const monthly = document.getElementById("monthly");
var arrayCards = [];

async function searchInfo(){
    var data = await fetch("../../data.json");
    var handle = await data.json();

    handle.forEach(element => {
        arrayCards.push(element);
    });
}

searchInfo();

daily.addEventListener("click", () => {
    control.forEach(element => {
        handle(element);
    });
})

weekly.addEventListener("click", () => {
    control.forEach(element => {
        handle(element);
    });
})

monthly.addEventListener("click", () => {
    control.forEach(element => {
        handle(element);
    });
})

function handle(element){
    console.log(arrayCards);
    const elementHandledHour = element.querySelector("#hours");
    elementHandledHour.innerHTML = 20 + "hrs";

    const elementHandledPeriod = element.querySelector("#previous");
    elementHandledPeriod.innerHTML = "Last week - " + 21 + "hrs";
}
