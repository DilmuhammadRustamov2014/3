// let count = 0;
// const newTag = 
// setInterval(()=> {

// console.log(count++);


// }, 1000)

let soat = document.querySelector("#soat");
let minut = document.querySelector("#minut");
let second = document.querySelector("#second"); 

function time() {
    let now = new Date();

    soat.textContent = String(now.getHours()).padStart(2, "0");
    minut.textContent = String(now.getMinutes()).padStart(2, "0");
    second.textContent = String(now.getSeconds()).padStart(2, "0"); 
}

setInterval(time, 1000);

