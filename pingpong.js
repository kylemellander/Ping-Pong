var number = prompt("Please provide a whole, positive number");

var pingPong = function (x) {
    if(x % 3 === 0) {
        if(x % 5 === 0) {
            document.write("ping-pong");
        } else {
            document.write("ping");
        }
    } else if (x % 5 === 0 ) {
        document.write("pong");
    } else {
        document.write(x);
    }
}

pingPong(number);
