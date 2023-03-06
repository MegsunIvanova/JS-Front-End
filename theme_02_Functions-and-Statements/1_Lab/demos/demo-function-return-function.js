function sayHello () {
    return function () {
        console.log ('Hello');
    }
}

sayHello()();