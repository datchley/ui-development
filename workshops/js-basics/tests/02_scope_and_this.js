/* jshint esnext:true */
/* global jest, expect, describe, it, xit */
jest.autoMockOff();

/* some global scope... */
var band = "Rush",
    song = "Tom Sawyer",
    where = "Global";

describe('Values and Types', () => {
    
    it('Scope is lexical within function', () => {

        function foo() {
            var band = "Queen",
                song = "Pressure",
                where = "foo",
                b;
        }
        foo();

        expect(band).toEqual("Rush");
        expect(song == "Pressure").toBe(false);
        expect(()=> console.log(b)).toThrow(new ReferenceError('b is not defined'));

    });

    it('A Scope has access to its parent scope', () => {
        function foo() {
            band = "Queen";
            song = "Pressure";
            where = "foo";
            c = 6;
        }
        foo();

        expect(band).toEqual("Queen");
        expect(song == "Pressure").toBe(true);
        expect(c).toBeDefined();
        expect(c).toBe(6);

    });

    it('Javascript does not have block scope (ES5)', () => {
        var a = 1;
        if (true) {
            var b = 2;
        }
        expect(b).toBeDefined();
    });

    it('Variable scope can be namespaced to avoid conflicts', () => {
        var level = 8;
        var my = { level: 10 };

        expect(level).toBe(8);
        expect(my.level).toBe(10);
    });

    it('Closures can be used to retain access to a local scope', () => {
        // Using the Immediately Invoked Function Expression (IIFE), return
        // a function that when called increments a count by 1 and starts
        // at 1.
        var inc = ((start) => {
            var count = start;
            return () => count++; 
        })(1);

        expect(() => console.log(count)).toThrow(new ReferenceError('count is not defined'));
        expect(inc()).toBe(1);
        expect(inc()).toBe(2);
    });
});
