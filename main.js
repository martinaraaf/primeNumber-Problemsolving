function printPrimes(n, m) {
    let primes=[]
    for (let i = n; i <= m; i++) { 
        if (IsPrime(i)) { 
            console.log(i); 
        }
    }
    console.log(primes.join(' '));
}


function IsPrime(num) {
    if (num < 2) return false; 
    for (let j = 2; j < num; j++) { 
        if (num % j == 0) return false; 
    }
    return true;
}


printPrimes(500, 1000); 
