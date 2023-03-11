// Your code here

const dodger = document.getElementById("dodger");

function moveDodgerLeft() {
    const leftNumbers = dodger.style.left.replace("px", "");
    const Left = parseInt(leftNumbers, 10);
    
    if (left > 0){
        dodger.style.left = `${left - 1}px`;
    }
}

function moveDodgerRight() {
    const rightNumbers = dodger.style.left.replace("px", "");
    const Right = parseInt(rightNumbers, 10);

    if (right > 0){
        dodger.style.left = `${right - 1}px`;
    }
}

document.addEventListener("keydown", function(e) {
    if (e.key === "Arrowlet"){
        moveDodgerLeft();
    }
});

document.addEventListener("keyup", function (e) {
    if (e.key === "Arrowlet"){
        moveDodgerRight();
    }
});


// const dodger = document.getElementById("dodger");
// dodger.style.backgroundColor = "#000000";

// const dodger = document.getElementById("dodger");
// dodger.style.backgroundColor = "#FF69B4";
// // dodger.style.bottom = "100px";
// dodger.style.left = "0px";
// dodger.style.bottom = "0px";

// document.addEventListener("keydown", function(event) {
//     console.log(event);
// });

// document.addEventListener("keydown", function (event) {
//     if (event.key === "ArrowLeft") {
//       const leftNumbers = dodger.style.left.replace("px", "");
//       const left = parseInt(leftNumbers, 10);
  
//       dodger.style.left = `${left - 1}px`;
//     }
//   });

// code above moves the dodger to the left when key is pressed
