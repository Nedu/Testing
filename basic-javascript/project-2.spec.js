const funcs = require('./project-2');

// whoops.. there is no test suite for this file. You'll simply just have to create one :/
describe('Project 2', () => {
    describe('getBiggest', () => {
        it('should return the larger number', () => {
            // arrange
            const getBiggest = funcs.getBiggest;

            // act
            const actual = getBiggest(2, 9);
            const actual2 = getBiggest(23, 9);
            const actual3 = getBiggest(2, 2);                        

            // assert
            expect(actual).toBe(9);
            expect(actual2).toBe(23);
            expect(actual3).toBe(2);                        
        });
    });

    describe('greeting', () => {
        it('should return a greeting', () => {
            // arrange
            const greeting = funcs.greeting;

            // act
            const actual = greeting('German');
            const actual2 = greeting('Spanish');
            const actual3 = greeting('hey there!');

            // assert
            expect(actual).toBe('Guten Tag!');
            expect(actual2).toBe('Hola!');
            expect(actual3).toBe('Hello!');
        });
    });

    describe('isTenOrFive', () => {
        it('should return a boolean', () => {
            // arrange
            const isTenOrFive = funcs.isTenOrFive;

            // act
            const actual = isTenOrFive(5);
            const actual2 = isTenOrFive(10);
            const actual3 = isTenOrFive(34);

            // assert
            expect(actual).toBeTruthy();
            expect(actual2).toBeTruthy();
            expect(actual3).toBeFalsy();
        });
    });

    describe('isInRange', () => {
        it('should return a boolean', () => {
            // arrange
            const isInRange = funcs.isInRange;

            // act
            const actual = isInRange(5);
            const actual2 = isInRange(30);
            const actual3 = isInRange(50);

            // assert
            expect(actual).toBeFalsy();
            expect(actual2).toBeTruthy();
            expect(actual3).toBeFalsy();
        });
    });

    describe('isInteger', () => {
        it('should return a boolean', () => {
            // arrange
            const isInteger = funcs.isInteger;

            // act
            const actual = isInteger(5.678);
            const actual2 = isInteger(30);

            // assert
            expect(actual).toBeFalsy();
            expect(actual2).toBeTruthy();
        });
    });

    describe('fizzBuzz', () => {
        it('should return a string or a number based on input', () => {
            // arrange
            const fizzBuzz = funcs.fizzBuzz;

            // act
            const actual = fizzBuzz(15);
            const actual2 = fizzBuzz(9);
            const actual3 = fizzBuzz(25);
            const actual4 = fizzBuzz(2);                                

            // assert
            expect(actual).toBe('fizzbuzz');
            expect(actual2).toBe('fizz');
            expect(actual3).toBe('buzz');
            expect(actual4).toBe(2);                        
        });
    });

    describe('isPrime', () => {
        it('should return a boolean', () => {
            // arrange
            const isPrime = funcs.isPrime;

            // act
            const actual = isPrime(-5);
            const actual2 = isPrime(0);
            const actual3 = isPrime(1);
            const actual4 = isPrime(2);
            const actual5 = isPrime(8);
            const actual6 = isPrime(7);

            // assert
            expect(actual).toBeFalsy();
            expect(actual2).toBeFalsy();
            expect(actual3).toBeFalsy();
            expect(actual4).toBeTruthy();
            expect(actual5).toBeFalsy();
            expect(actual6).toBeTruthy();
        });
    });

    describe('returnFirst', () => {
        it('should return the first element in an array', () => {
            // arrange
            const expected = 'hi';
            const returnFirst = funcs.returnFirst;

            // act
            const actual = returnFirst(['hi', 0, 4, 5, 3, 3, 8]);

            // assert
            expect(actual).toBe(expected);
        });
    });

    describe('returnLast', () => {
        it('should return the last element in an array', () => {
            // arrange
            const expected = 'bye';
            const returnLast = funcs.returnLast;

            // act
            const actual = returnLast(['hi', 0, 4, 5, 3, 3, 8, 'bye']);

            // assert
            expect(actual).toBe(expected);
        });
    });

    describe('getArrayLength', () => {
        it('should return the length of an array', () => {
            // arrange
            const expected = 8;
            const getArrayLength = funcs.getArrayLength;

            // act
            const actual = getArrayLength(['hi', 0, 4, 5, 3, 3, 8, 'bye']);

            // assert
            expect(actual).toBe(expected);
        });
    });

    describe('incrementByOne', () => {
        it('should increment each element of an array by one', () => {
            // arrange
            const expected = [0, 1, 2, 3, 4, 5];
            const incrementByOne = funcs.incrementByOne;

            // act
            const actual = incrementByOne([-1, 0, 1, 2, 3, 4]);

            // assert
            expect(actual).toEqual(expected);
        });
    });

    describe('addItemToArray', () => {
        it('should add item to an array', () => {
            // arrange
            const expected = [0, 1, 2, 3, 4, 5];
            const addItemToArray = funcs.addItemToArray;

            // act
            const actual = addItemToArray([0, 1, 2, 3, 4], 5);

            // assert
            expect(actual).toEqual(expected);
        });
    });

    describe('addItemToFront', () => {
        it('should add item to the front of an array', () => {
            // arrange
            const expected = [5, 0, 1, 2, 3, 4];
            const addItemToFront = funcs.addItemToFront;

            // act
            const actual = addItemToFront([0, 1, 2, 3, 4], 5);

            // assert
            expect(actual).toEqual(expected);
        });
    });

    describe('wordsToSentence', () => {
        it('should return a sentence from words', () => {
            // arrange
            const expected = 'are you ready';
            const wordsToSentence = funcs.wordsToSentence;

            // act
            const actual = wordsToSentence(['are', 'you', 'ready']);

            // assert
            expect(actual).toEqual(expected);
        });
    });

    describe('contains', () => {
        it('should return a boolean', () => {
            // arrange
            const contains = funcs.contains;

            // act
            const actual = contains(['are', 'you', 'ready'], 'are');
            const actual2 = contains([1, 56, 90], 'are');

            // assert
            expect(actual).toBeTruthy();
            expect(actual2).toBeFalsy();
        });
    });

    describe('addNumbers', () => {
        it('should return the sum of all numbers in an array', () => {
            // arrange
            const expected = 147;
            const addNumbers = funcs.addNumbers;

            // act
            const actual = addNumbers([1, 56, 90]);

            // assert
            expect(actual).toBe(expected);
        });
    });

    describe('averageTestScore', () => {
        it('should return the average of all numbers in an array', () => {
            // arrange
            const expected = 62;
            const averageTestScore = funcs.averageTestScore;

            // act
            const actual = averageTestScore([45, 65, 93, 45]);

            // assert
            expect(actual).toBe(expected);
        });
    });

    describe('largestNumber', () => {
        it('should return the largest of all numbers in an array', () => {
            // arrange
            const expected = 93;
            const largestNumber = funcs.largestNumber;

            // act
            const actual = largestNumber([45, 65, 93, 45]);

            // assert
            expect(actual).toBe(expected);
        });
    });
})