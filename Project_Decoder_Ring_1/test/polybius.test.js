// Write your tests here!
const polybius = require('../src/polybius');
const expect = require('chai').expect;

describe("polybius square", () => {
    it("should take input and encode it", () => {
        const actual = polybius.polybius("thinkful");
        const expected = "4432423352125413";
        expect(actual).to.eql(expected);
    });
    it("should work regardless of uppercase", () => {
        const actual = polybius.polybius("Hello world");
        const expected = "3251131343 2543241341";
        expect(actual).to.eql(expected);
    });
    it("should decode input numbers to a message", () => {
        const actual = polybius.polybius("3251131343 2543241341", false);
        const expected = "hello world";
        expect(actual).to.eql(expected);
    });
    it('should return message with "(i/j)"', () => {
        const actual = polybius.polybius("4432423352125413", false);
        const expected = "th(i/j)nkful";
        expect(actual).to.eql(expected);
    });
    it("should return false if number input to decode isn't complete", () => {
        const actual = polybius.polybius("44324233521254134", false);
        const expected = false;
        expect(actual).to.eql(expected);
    });
});