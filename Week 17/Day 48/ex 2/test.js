var disemvowel = require("./disemvowel.js");
var expect = require("chai").expect;

// Mark Carlson [7:48 PM]
// INSTRUCTIONS:

// Familiarize yourself with the Mocha and Chai documentation. Choose to read either the should, expect, or assert guide, and refer to it throughout the exercise.

// Consider a function, called disemvowel, which accepts a string and returns a version of the string without vowels.

// Your task is to use Chai to write a test suite for disemvowel. The catch is that you don’t get an implementation yet. First,

// With your partner, determine what a “representative example” of an input to disemvowel might be.

// What do we expect to receive? What should the function return of this input?

// What different formats can this sort of input take?

// What don’t we expect? What should happen in this case? Hint: Just come up with something reasonable. We’re not going to make you guess how we handled errors, so you don’t have to write a test for this.

// When you think you’re done, explain to your partner why the test you’ve written totally describes disemvowel. Be prepared to explain your test suite to the class.

describe("disemovowel", function(){
	it("should remove all vowels from the word apple", function(){
		expect(disemvowel("apple")).to.equal("ppl");
	})

	it("should remove all vowels from the word banana", function(){
		expect(disemvowel("banana")).to.equal("bnn");
	})

	it("should turn numbers to strings", function(){
		expect(disemvowel(12345)).to.equal("12345");
	})
})