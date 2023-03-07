const control = document.querySelectorAll("#card");
const daily = document.getElementById("daily");
const weekly = document.getElementById("weekly");
const monthly = document.getElementById("monthly");

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
    const elementHandledHour = element.querySelector("#hours");
    elementHandledHour.innerHTML = 2 + "hrs";

    const elementHandledPeriod = element.querySelector("#previous");
    elementHandledPeriod.innerHTML = "Last week - " + 2 + "hrs";
}