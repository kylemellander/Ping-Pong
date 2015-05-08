var number = prompt("Please provide a whole, positive number");

var pingPong = function (x) {
    if(number % 3 === 0) {
        if(number % 5 === 0) {
            return "ping-pong";
        } else {
            return "ping";
        }
    } else if (number % 5 === 0 ) {
        return "pong";
    } else {
        return number;
    }
}

pingPong(number);
