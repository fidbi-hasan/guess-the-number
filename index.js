// Number generator game

let clicks = 0;

document.getElementById("predictButton").onclick = function () {
    let x = Math.floor(Math.random() * 6) + 1;
    // document.getElementById("randomNumber").innerHTML = x;

    let myNumber = document.getElementById("myNumber").value;

    if (myNumber == "") {
        document.getElementById("result").innerHTML = "Please Enter a number between 1 to 6!";
    }
    else {
        clicks = clicks + 1;
        document.getElementById("randomNumber").innerHTML = x;

        if (myNumber == x) {
            document.getElementById("result").innerHTML = "Prediction Correct! You Won!";
            document.getElementById("attemps").innerHTML = "Total Attempts: " + clicks;
        }
        else {
            document.getElementById("result").innerHTML = "Prediction Wrong! You Lost!";
            document.getElementById("attemps").innerHTML = "";
        }
    }
    
}