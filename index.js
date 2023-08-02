// //variable
// var a="Hello!"

// //function
// function b(){
//     console.log("Function b called...")
// }

// //printing on console
// console.log(a);
// b();

// //flow -> first it will print the variable that we declared and then 
// //it goes through the function and execute the code in function
// function c(){
//     var myVar;
//     console.log(myVar);
// }
// c();
// var myVar=1;
// console.log(myVar);


//counter

const endDate="23 August 2023 12:00 AM";

document.getElementById("enddate").innerText = endDate;
const inputs = document.querySelectorAll("input");

const clock = () => {
    const end = new Date(endDate);
    const now = new Date();
    const diff = (end - now)/1000;

    if(diff < 0) return;
    
    //convert into days
    inputs[0].value = Math.floor(diff / 3600 / 24);

    //convert into hours
    inputs[1].value = Math.floor(diff / 3600 % 24);

    //convert into minutes
    inputs[2].value = Math.floor(diff / 60 %  60);

    //convert into seconds
    inputs[3].value = Math.floor(diff % 60);

}

clock();

setInterval(() => {
    clock();
}, 1000)