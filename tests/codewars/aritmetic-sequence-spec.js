describe('CODEWARS: Arithmetic Sequence', function(){

    var nthterm;// = require('../../codewars/aritmetic-sequence-spec.js')

    beforeEach(module(function(_nthterm_){
        nthterm = _nthterm_;
    }));

    it('Should equal to 7', function(){
        expect(nthterm(1, 2, 3)).toBe(7);
    });

    it('Should equal to 6', function(){
        expect(nthterm(2, 2, 2)).toBe(6);
    });    

    it('Should equal to 150', function(){
        expect(nthterm(-50, 10, 20)).toBe(150);
    });      
});
