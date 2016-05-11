if(typeof(print) === 'undefined') {
    // node
    print = console.log;
    n=process.argv[2];
} else {
    // rhino
    n=arguments[0];
}

var eratosthenes = function(n) {
    // Eratosthenes algorithm to find all primes under n
    var array = [];

    // Make an array from 2 to (n - 1)
    for (var i = 0; i < n; i++) {
        array.push(true);
    }

    // Remove multiples of primes starting from 2, 3, 5,...
    for (var i = 2; i <= n; i++) {
        if (array[i]) {
            print(i);
            for (var j = i * i; j < n; j += i) {
                array[j] = false;
            }
        }
    }
};

eratosthenes(parseInt(n));

