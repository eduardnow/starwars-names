var expect = require('chai').expect;
var starWars = require('./index');

describe('starwras-names', () => {
    it('should work!', () => {
        expect(true).to.be.true;
    });

    describe('all', () => {
        it('should be an array of string', () => {
            expect(starWars.all).to.satisfy(isArrayOfStrings);

            function isArrayOfStrings(array) {
                return array.every((item) => {
                    return typeof item === 'string';
                });
            }
        });

        it('should contain `Luke Skywalker`', () => {
            expect(starWars.all).to.include('Luke Skywalker');
        });
    });


    describe('random', () => {
        it('should return a random item from the starWars.all', () => {
            var randomItem = starWars.random();

            expect(starWars.all).to.include(randomItem);
        });
    });
});