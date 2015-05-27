jest.autoMockOff();

describe('Values and Types', () => {
    
    it('Javascript has six basic types', () => {
        // Using literals for each type below
        // declare variables to pass the checks
        let types = {
            object: { a: 1 },       // non-null object,
            undef: undefined,       // undefined
            string: 'a string',     // string literal
            number: 42,             // number literal
            nullobj: null,          // null object
            bool: true              // boolean literal
        };

        expect(typeof types.object).toBe('object');
        expect(typeof types.undef).toBe('undefined');
        expect(typeof types.string).toBe('string');
        expect(typeof types.number).toBe('number');
        expect(typeof types.nullobj).toBe('object');
        expect(typeof types.bool).toBe('boolean');
    });

    it('Accessing Object and Array values', () => {

        let obj = {
                a: 42,
                b: "fourty two"
            },
            arr = [1,2,3],

            // Assign values to the following variables to
            // ensure the below tests pass as expected.
            a = obj.a, 
            b = "b",
            c = 1,
            len = arr.length;

        expect(a).toEqual(42);
        expect(obj[b]).toEqual("fourty two");
        expect(arr[c]).toEqual(2);
        expect(len).toEqual(3);
    });

    it('Using Functions', () => {
        // Declare a function called sum that adds two numbers
        function sum(a,b) { return a+b; }

        // Create a function expression called that performs the 
        // same function as sum()
        let add = function(a,b){ return a+b; };

        // Functions can be used as first-class values, and
        // so can be passed to and returned from functions.
        function doSum(fn, a, b) { return fn(a,b); };
        function passback(fn){ return fn; }

        expect(sum(4,4)).toEqual(8);
        expect(add(3,3)).toEqual(6);
        expect(doSum(sum,1,2)).toEqual(3);
        expect(passback(add)(1,2)).toEqual(3);
    });

    it('Truthy vs Falsy Values', () => {
        // Create an array of ALL the falsy values in
        // javascript by removing the non-falsy values from
        // the following array.
        // var falsy = ["", {}, 0, -0, function(){}, -4, NaN, " ", null, true, undefined, [], false];
        var falsy = ["", 0, -0, NaN, null, undefined, false];

        expect(falsy.filter((v) => !!v).length).toBe(0);
        expect(falsy.length).toBe(7);
    });

    it('Comparison and Coercion', () => {
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

        expect("42" === 42).toBe(false);
        expect("42" == 42).toBe(true);
        expect([1,2,3] == [1,2,3]).toBe(false);
        expect("1,2,3" == [1,2,3]).toBe(true);
        expect(null == undefined).toBe(true);
        expect(null === undefined).toBe(false);
        expect(41 < "42").toBe(true);
        expect("42" < "43").toBe(true);

        // Special cases with NaN
        expect(42 < "foo").toBe(false);
        expect(42 > "foo").toBe(false);
        expect(42 == "foo").toBe(false);

    });

});
