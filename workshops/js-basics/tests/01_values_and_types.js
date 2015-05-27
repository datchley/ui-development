/* jshint esnext:true */
/* global jest, expect, describe, it, xit */
jest.autoMockOff();

describe('Values and Types', () => {
    
    xit('Javascript\'s six basic types', () => {
        // Using literals for each type below
        // declare variables to pass the checks
        /*
        let types = {
            object: ,       // non-null object,
            undef: ,        // undefined
            string: ,       // string literal
            number: ,       // number literal
            nullobj: ,      // null object
            bool:           // boolean literal
        };
        */

        expect(typeof types.object).toBe('object');
        expect(typeof types.undef).toBe('undefined');
        expect(typeof types.string).toBe('string');
        expect(typeof types.number).toBe('number');
        expect(typeof types.nullobj).toBe('object');
        expect(typeof types.bool).toBe('boolean');

        // What should we expect his to be?
        expect(typeof null).toBe();
    });

    xit('Accessing Object and Array values', () => {

        let obj = {
                a: 42,
                b: "fourty two",
                c: {
                    d: "toasters"
                }
            },
            arr = [1,2,3];

        // Object and Array literal notation: 
        // Assign values to the following variables to
        // ensure the below tests pass as expected.
        /*
        let a, 
            b,
            c,
            d,
            len ;
        */


        expect(a).toEqual(42);
        expect(obj[b]).toEqual("fourty two");
        expect(obj[b][d]).toEqual("toasters");
        expect(arr[c]).toEqual(2);
        expect(len).toEqual(3);

    });

    xit('Working with Arrays as Types', () => {
        // Arrays can be created using array literals or
        // using the Array constructor invoked with the 'new' operator.
        // The Array constructor can take a single param, which signifies
        // the length of the array to create; or, multiple parameters which
        // will create an array with those values as entries
        // Array's also have a length property to get the number of elements

        // Complete the code to pass the following tests
        /*
        let arrA = ,        // array with 3 undefined values, 
            arrB = ;        // array of numbers 1 - 4
        */

        expect(arrA.length).toBe(3);
        expect(arrA.toString()).toBe(",,");
        expect(arrB.reduce((sum, n) => sum+=n)).toBe(10);
        expect(arrB.length).toBe(4);
    });

    xit('Working with Objects as Types', () => {
        // Objects can be created using object literals, the Object constructor
        // with the 'new' operator or Object.create().
        
        // Complete the following code to pass the tests
        /*
        let objA = ,   // use 'new Object' to create
            objB = ,   // use literal notation
            objC = ;   // using Object.create
        */

        expect(objA.name).toBe("Han Solo");
        expect(objB.name).toBe("Darth Vader");
        expect(objC.name).toBe("Luke Skywalker");
    });


    xit('First-Class & Higher Order Functions', () => {
        // Functions can be created in two basic ways:
        //  1. declaration:  function foo(){ ... }
        //  2. expression: var f = function(){ ... }
        //
        // - Functions are first-class objects in Javascript, meaning
        //   they can be used anywhere a value would be used.
        // - Because of this, functions in Javascript can also be higher-order
        //   functions, meaning they can take a function as a parameter and 
        //   return a function as a value.

        // Declare a function called 'sum' that returns the sum of two numbers
        /* function ... */

        // Assign a function expression to 'add' that returns the sum of two numbers
        /* let add =  */

        // Ensure that 'callWith' can be called with a function
        // as the first argument and returns the result of calling
        // that function with the two additional arguments 
        function callWith(fn, a, b) { 
            /* return  ... */
        };
        let added = callWith(sum, 5, 8);

        // Ensure that 'getSqr' returns a function that will return
        // the square of it's argument.
        function getSqr() { 
            /* return  ... */
        }

        expect(sum(4,4)).toEqual(8);
        expect(add(3,3)).toEqual(6);
        expect(added).toEqual(13);
        expect(getSqr()(4)).toEqual(16);
    });

    xit('Truthy vs Falsy Values', () => {
        // Create an array of ALL the falsy values in
        // javascript by removing the non-falsy values from
        // the following array.

        var falsy = ["", {}, 0, -0, function(){}, -4, NaN, " ", null, true, undefined, [], false];

        expect(falsy.filter((v) => !!v).length).toBe(0);
        expect(falsy.length).toBe(7);
    });

    xit('Comparison and Coercion', () => {
        // Javascript has two equality operators '==' and '==='
        //  * '==' checks for value equality allowing for coercion of types
        //  * '===' checks for value equality and disallows coercion
        //
        // Remember coercion applies with inequality as well. <, >, <=, >=
        //  * NaN (Invalid Number) value is neither less-than or greater-than any other number
        //    so inequality comparisons against NaN (or a value that coerces to NaN) will never
        //    be true
        //
        // Javascript comparison rules can be boiled down as follows:
        //  * If either value (aka side) in a comparison could be the true or false value, avoid == and use ===.
        //  * If either value in a comparison could be of these specific values (0, "", or [] -- empty array), avoid == and use ===.
        //  * In all other cases, you're safe to use ==. Not only is it safe, but in many cases it simplifies your code in a way that improves readability.
        //
        // Fill in the expected value in the following tests

        expect("42" === 42).toBe();
        expect("42" == 42).toBe();
        expect([1,2,3] == [1,2,3]).toBe();
        expect("1,2,3" == [1,2,3]).toBe();
        expect(null == undefined).toBe();
        expect(null === undefined).toBe();
        expect(41 < "42").toBe();
        expect("42" < "43").toBe();

        // Special cases with NaN
        expect(42 < "foo").toBe();
        expect(42 > "foo").toBe();
        expect(42 == "foo").toBe();

    });

});
