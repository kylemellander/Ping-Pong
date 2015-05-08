var number = prompt("Please provide a whole, positive number");

var pingPong = function (x) {
    if(x % 3 === 0) {
        if(x % 5 === 0) {
            console.log("ping-pong");
        } else {
            console.log("ping");
        }
    } else if (x % 5 === 0 ) {
        console.log("pong");
    } else {
        console.log(x);
    }
}

pingPong(number);
