/*
Two tortoises named A and B must run a race. A starts with an average speed of 720 feet per hour. Young B knows she runs faster than A and furthermore has not finished her cabbage.

When she starts, at last, she can see that A has a 70 feet lead but B speed is 850 feet per hour. How long will it take B to catch A?

More generally: given two speeds v1 (A speed, integer > 0) and v2 (B speed, integer > 0) and a lead g (integer > 0) how long will it take B to catch A?

The result will be an array [h, mn, s] where h, mn, s is the time needed in hours, minutes and seconds (don't worry for fractions of second). If v1 >= v2 then return nil, nothing, null, None or {-1, -1, -1} for C++.

Examples:
    race(720, 850, 70) => [0, 32, 18]
    race(80, 91, 37) => [3, 21, 49]
*/

describe('TORTOISE RACING TEST SUITE: => ', function(){

    var race = function(v1, v2, g){        
        // Check
        if(v1 >= v2) { return null };

        // Vars
        var rv = [];
        var speedDiffPerHour =  v2 - v1;        
        var remaining = g % speedDiffPerHour;
        var distancePerSecond = speedDiffPerHour / 3600;

        rv.push((speedDiffPerHour < g) ? Math.floor(g / speedDiffPerHour) : 0);
        rv.push(Math.floor((remaining / distancePerSecond) / 60));
        rv.push(Math.floor((((remaining / distancePerSecond) / 60) % 1) * 60));

        return rv;
    }

    it('Should return [0, 32, 18]', function(){
        var result = race(720, 850, 70);
        expect(result[0]).toEqual(0);
        expect(result[1]).toEqual(32);
        expect(result[2]).toEqual(18);
    });

    it('Should return [3, 21, 49]', function(){
        var result = race(80, 91, 37);
        expect(result[0]).toEqual(3);
        expect(result[1]).toEqual(21);
        expect(result[2]).toEqual(49);
    });

    it('Should return [2, 0, 0]', function(){
        var result = race(80, 100, 40);
        expect(result[0]).toEqual(2);
        expect(result[1]).toEqual(0);
        expect(result[2]).toEqual(0);
    });

    it('Should return null', function(){
        var result = race(80, 70, 37);
        expect(result).toEqual(null);
    });
});