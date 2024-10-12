function ageControl() {
    console.log("AHOJ!");

    // Získání věku a následné vypsání
    const age = parseInt(document.getElementById("ageInput").value);
    console.log("Váš věk je: " + age);

    // Sčítání
    let variable1 = age + 1;
    console.log(variable1);
}

function startCycle() {
    // i++ = i=i+1 i=0+1 -> i = 1+1
    for(let i = 1; i < 11; i++) {
        //console.log("Ahoj");
        console.log(i);
    }

}

function ifFunction() {
    let i = 10
    let x = 12

    if(i < x) {
        console.log("I je menší než X!");
    }

    if(i > x) {
        console.log("I je větší než X!");
    }

    if(i > x) {
        console.log("I je větší než X!");
    } else console.log("I je menší než X!");

    if(i > x) {
        console.log("I je větší než X!");
    } else if(i === x){
        console.log("I je rovno X!");
    } else if(i < x) {
        console.log("I je menší než X!");
    }

    let z = 1   // number / int
    let g = "1" // string

    if(z == g) { // porovnává hodnoty
        console.log("JSOU ROVNA ==");
    } else if (z === g) { // porovnává hodnoty, ale i datové typy
        console.log("JSOU ROVNA ===");
    }
    

}

function outputNumber() {
    let i = "Ahoj"
    document.getElementById("outPut").value = i

    alert("Hello! I am an alert box!!");

}