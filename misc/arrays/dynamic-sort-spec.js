describe('MISC: DYNAMIC ARRAY SORT: => ', function(){
    
    var data = [
        {name: 'John', age: 12},
        {name: 'Bertie', age: 58},
        {name: 'Anne', age: 27},
        {name: 'alan', age: 34},
        {name: 'Zoltan', age: 16},
        {name: 'Kenny', age: 45}
    ];

    var last = data.length - 1;

    var dynamicSort = function(key, caseSensitive){
        var orderBy = (key[0] === '-') ? -1 : 1;
        key = (orderBy === 1) ? key : key.substr(1);

        if(caseSensitive){
            return function (a, b){ return (a[key] > b[key] ? 1 : a[key] < b[key] ? -1 : 0) * orderBy; }
        }
        else {
            return function (a, b){ 
                // From performance pov, maybe better to split into 2 different functions, 1 for string, the other for numbers.
                if(typeof a[key] == 'string'){
                    return (a[key].toLowerCase() > b[key].toLowerCase() ? 1 : a[key].toLowerCase() < b[key].toLowerCase() ? -1 : 0) * orderBy; 
                }
                else {
                    return function (a, b){ return (a[key] > b[key] ? 1 : a[key] < b[key] ? -1 : 0) * orderBy; }
                }
            }
        }        
    }

    // Name => Case Insensitive
    it("First name should be 'alan' (case insensitive => no arg passed )", function(){        
        expect(data.sort(dynamicSort('name'))[0].name).toBe("alan");
    });

    it("First name should be 'alan' (case insensitive)", function(){        
        expect(data.sort(dynamicSort('name', false))[0].name).toBe("alan");
    });
         
    it("Last name should be 'alan' (case insensitive - reverse order)", function(){        
        expect(data.sort(dynamicSort('-name', false))[last].name).toBe("alan");
    });  

    it("Last name should be 'Zoltan' (case insensitive)", function(){        
        expect(data.sort(dynamicSort('name', false))[last].name).toBe("Zoltan");
    });

    // Name => Case Sensitive
    it("First name should be 'Anne' (case sensitive)", function(){        
        expect(data.sort(dynamicSort('name', true))[0].name).toBe("Anne");
    });
         
    it("Last name should be 'Anne' (case sensitive - reverse order)", function(){
        expect(data.sort(dynamicSort('-name', true))[last].name).toBe("Anne");
    }); 

    it("Last name should be 'alan' (case sensitive)", function(){        
        expect(data.sort(dynamicSort('name', true))[last].name).toBe("alan");
    }); 

    // Age
    it("First age should be 12 (case sensitive)", function(){        
        expect(data.sort(dynamicSort('age', true))[0].age).toBe(12);
    });  

    it("Last age should be 58 (case insensitive)", function(){        
        expect(data.sort(dynamicSort('age', true))[last].age).toBe(58);
    });  

    it("Last age should be 58 (case insensitive)", function(){        
        expect(data.sort(dynamicSort('age', false))[last].age).toBe(58);
    });  

    it("Last age should be 58 (case insensitive => no arg passed )", function(){        
        expect(data.sort(dynamicSort('age'))[last].age).toBe(58);
    });      
});