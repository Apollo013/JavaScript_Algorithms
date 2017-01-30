/*
    Determine if a number is a prime number
*/

describe('IS A PRIME NUMBER: => ', function(){

    var isPrime = function(number){
        if(number == 1){return false;}
        if(number == 2){return true;}

        var sqrt = Math.floor(Math.sqrt(number));
        for(var i = 2; i <= sqrt; i++){
            if(number % i == 0){return false;}
        }
        return true;
    };

    it('Should return false for 1', function(){
        expect(isPrime(1)).toBe(false);
    });

    it('Should return true for 2', function(){
        expect(isPrime(2)).toBe(true);
    });

    it('Should return true for 11', function(){
        expect(isPrime(11)).toBe(true);
    });

    it('Should return false for 10', function(){
        expect(isPrime(10)).toBe(false);
    });

});