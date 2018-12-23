var Namespace = (function () {
    'use strict';

    var greet = (msg) => {
        console.log(msg);
    };

    class Main {
        init() {
            greet('Hello world ~');
        }
    }

    var main = new Main();

    return main;

}());
