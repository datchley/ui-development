# JS Basics Workshop

## Welcome
Welcome to this Javascript Basics workshop. Our goal is to help everyone make strides towards learning the what we feel
are the basic skills in ES5 & ES6 syntax that every Javascript developer should have.

This repo is primarily designed to be used in parallel with a lecture/workshop style presentation of the skills; but, 
developers can also check this out and work through the content on their own.

## Your Goals
This repo is full of failing tests in the `test/` directory. The only way to get them to pass it by using your [newly] acquired knowledge of 
Javascript and its features. For each test, you will need to write/rewrite the code using the given test requirements. 
Once all of your tests pass, you will want to move onto the next section.

By the time that the workshop is over (*or you've worked through them all in sequence*), all of your tests will be passing.

## How To Get Started

### Clone the repo
You will need to start by cloning this repo. From your terminal, type:
```
git clone https://github.com/datchley/ui-development.git && cd ui-development/workshops/js-basics
```

### Install Dependencies
Once you have cloned the repo, you will  need to install the local dependencies. From your terminal, type:
```
npm install --global babel && npm install
```

*Note that this step will install `Babel` globally. This project uses Babel to provide support for ES6 syntax. Without
it, we wouldn't be able to use many of these features.*

# How To Run Tests
Once you have everything installed, you are ready to run some tests. There are two directories with tests in them: `tests` and `tests-finished`.
The `tests-finished` directory is like a cheat sheet - **DON'T USE IT UNLESS YOU HAVE TOO**. 
All of the tests contain the required ES5 or ES6 code to make the tests pass. You will need to
edit the tests in the `tests` directory, and make the tests pass.

To run the tests, in your terminal run:

```javascript
npm test
```

This will execute the tests in the `tests` directory. 
Currently all of these tests are disabled, because we've changed the `it()` statement
to `xit()`, which will skip that test. Your job is to one-by-one turn each test back on and get the test to pass, by
writing the required code. Once you have written the required code, the tests will pass, and you can move onto the next test.

If you're taking this as a workshop with an instructor, you'll take breaks after each test section to discuss 
and run the tests and answer questions.

------
