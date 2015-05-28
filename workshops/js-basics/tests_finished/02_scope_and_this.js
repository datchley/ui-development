/* jshint esnext:true */
/* global jest, expect, describe, it, xit */
jest.autoMockOff();


describe('Values and Types', () => {
    
    it('Scope is lexical', () => {
        var a = 4;

        // Declare local variables in the closure for
        // 'a' and 'b'
        !function(){
            var a = 6, b = 3;
        }();

        expect(()=> console.log(b)).toThrow(new ReferenceError('b is not defined'));
        expect(a).toBe(4);
    });

    it('A Scope has access to its parent scope', () => {
        var a = 4,
            sum;

        // Inside the closure ensure that 'sum'
        // is equal to the square of 'a' outside
        // the closure
        !function() {
            sum = a * a;
        }();

        expect(sum).toEqual(16);
    });

    it('Javascript and block scope (ES5 vs ES6)', () => {
        // There are exceptions, like the 'catch' of a 'try..catch'
        // statement, and when using 'let' instead of 'var' inside
        // a block.
        var a = 1;

        // Inside the 'if' declare a variable 'b' that is not block scoped
        // and a variable 'c' that is block scope
        if (true) {
            var b = 2;
            let c = 4;
        }

        expect(b).toBeDefined();
        expect(() => console.log(c)).toThrow(new ReferenceError('c is not defined'));
    });

    it('Variable scope can be namespaced to avoid conflicts', () => {
        var level = 8;
        // Declare a new namespace called 'my' that has it's own
        // 'level' variable set to 10
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

    it('Javascript \'var\' declarations and functions hoist', () => {
        // 'var' and function declarations are hoisted to the top of the current
        // lexical scope. However, the values 'var' of those declarations are not
        // assigned until the point in the code they are found. Including
        // function expressions.
       
        if (true) {
            expect(b).toBe(undefined);
            expect(foo).toBeDefined();
            expect(typeof c).toBe('undefined');
        }

        // Declar a variable 'b' and a function 'foo' that passes the tests
        var b = 16;
        function foo() { return 4; }

        // Declare a variable c that holds a function expression that satisfies the tests
        var c = function(){ return true; };

        if (true) {
            expect(b).toBeDefined();
            expect(b).toBe(16);
            expect(foo()).toBe(4);
            expect(typeof c).toBe('function');
        }
    });

    it('\'let\' declarations are not hoisted', () => {
        // 'let' declarations and initially assigned values are not
        // hoisted and throw a reference error

        if (true) {
            // DOESN'T WORK IN BABEL:  expect(() => console.log(a)).toThrow(new ReferenceError('a is not defined'));
            expect(a).toBeUndefined();
            expect(b).toBeUndefined();
        }

        // Declare variables 'a' and 'b' that satisfy the tests
        let a = 4;
        var b = 4;

        if (true) {
            expect(b).toBeDefined();
            expect(a).toBe(4);
        }
    });

    it('\'this\' in constructors refer to the returned object', () => {
        
        // Ensure that Person object's have a name
        function Person(name) {
            this.name = name;
        }
        var me = new Person("Captain Mal");

        expect(me instanceof Person).toBe(true);
        expect(me.name).toBe("Captain Mal");
    });

    //
    // NOTE: The following two tests won't work in node/babel, so you
    // need to copy the contents of each into a browser console and run
    // them, modifying the code until the tests pass
    //

    xit('\'this\' in methods refers the object context', () => {
        // INSTRUCTIONS: Run the following test in your browser devtools console
        // and satisfy all the tests
        var assert = {
            test: 1,
            equal: function(exp, target) {
                console.log("[test](%d) expected "+target+" got " + exp + " (%s)", this.test++, (exp == target ? 'SUCCESS' : 'FAIL'));
            }
        };

        // In functions, 'this' is the context in which the function
        // was called. If called via an object, the object instance
        // is the context. Otherwise, it's the global object 'window' or 'root'
        var name = "Jane";

        // Using the same Person constructor from the previous test, Ensure
        // that the 'whoami' function returns the person's name and satisfies
        // the tests.
        function Person(name) {
            this.name = name;
        }
        Person.prototype.whoami = function() { return this.name; };
        var me = new Person("River");

        // In a browser, 'this' would be defined inside function and it
        // would be global scope
        var whoami = function() { 
            return this.name;
        };

        assert.equal(me instanceof Person, true);
        assert.equal(me.whoami(), "River");
        assert.equal(whoami(), "Jane");
    });

    xit('\'eval\' can modify scope and is bad (1)', () => {
        // INSTRUCTIONS: Run the following test in your browser devtools console
        // and satisfy all the tests
        var assert = {
            test: 1,
            equal: function(exp, target) {
                console.log("[test](%d) expected "+target+" got " + exp + " (%s)", this.test++, (exp == target ? 'SUCCESS' : 'FAIL'));
            }
        };

        var b = 4;
        function show(s, a) {
            eval(s);
            assert.equal(a, 1);
            assert.equal(b, 3);
        }

        // Call show with arguments that satisfy the tests
        show("var b = 3", 1);
    });

    it('\'eval\' can modify scope and is bad (2)', () => {
        // eval has access and can modify the local scope that it is
        // enclosed in

        var b = 4;

        expect(b).toBe(4);
        function show(s, a) {
            eval(s);
            expect(a).toBe(1);
            expect(b).toBe(3);
        }

        // Call 'show' with arguments that satisfy the tests
        show("b = 3", 1);
        expect(b).toBe(3);
    });

    it('\'eval\' can modify scope and is bad (3)', () => {
        // "use strict" changes the function of eval to contain any
        // delcarations in a scope local to the executing code and not leak it
        // into the enclosing scope

        function show(s) {
            "use strict";
            eval(s);
            expect(() => console.log(a)).toThrow(new ReferenceError('a is not defined'));
        }

        // Call 'show' with arguments that satisfy the tests
        show("var a = 3");
    });
});
