var number = prompt("Please provide a whole, positive number");

var pingPong = function (x) {
    if(number % 3 === 0) {
        if(number % 5 === 0) {
            console.log("ping-pong");
        } else {
            console.log("ping");
        }
    } else if (number % 5 === 0 ) {
        console.log("pong");
    } else {
        console.log(number);
    }
}

pingPong(number);
