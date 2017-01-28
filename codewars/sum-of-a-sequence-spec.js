/*
    Your task is to make function, which returns the sum of a sequence of integers.
    The sequence is defined by 3 non-negative values: begin, end, step.
    If begin value is greater than the end, function should returns 0

    Examples
    sequenceSum(2,2,2) === 2
    sequenceSum(2,6,2) === 12 // 2 + 4 + 6
    sequenceSum(1,5,1) === 15 // 1 + 2 + 3 + 4 + 5
    sequenceSum(1,5,3) === 5 // 1 + 4
*/

describe('CODEWARS: Sum of the Sequence: => ', function(){
    var sequenceSum = function(begin, end, step){
        if (begin > end) { return 0; }
        return begin + sequenceSum(begin + step, end, step);
    }

    it('Should equal to 2', function(){
        expect(sequenceSum(2, 2, 2)).toBe(2);
    });
    
    it('Should equal to 12', function(){
        expect(sequenceSum(2, 6, 2)).toBe(12);
    });

    it('Should equal to 15', function(){
        expect(sequenceSum(1, 5, 1)).toBe(15);
    });

    it('Should equal to 5', function(){
        expect(sequenceSum(1, 5, 3)).toBe(5);
    });            
});