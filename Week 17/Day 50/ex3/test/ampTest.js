// Mark Carlson [11:36 AM]
// Instructions

// Your task is to write a function that accepts an array of names and that produces the following kinds of output:

// For [‘Pushkin’]: Pushkin.

// For [‘Pushkin’, ‘Gogol’]: Pushkin & Gogol.

// For [‘Pushkin’, ‘Gogol’, ‘Zamyatin’]: Pushkin, Gogol & Zamyatin.

// With a partner, write unit tests against this behavior. Once you’ve described the function sufficiently, kick up a Karma server, and begin implementing the function.

// Do your tests completely describe the function? Be ready to explain why or why not.

var amp = require("../src/amp.js");
var expect = require("chai").expect;


describe("amp", function(){
	it("should return a plain name if only one is provided", function(){
		expect(amp(["Bob"]).string).to.equal("Bob");
	})

	it("should insert & in between each name", function(){
		expect(amp(["Bob","Rob"]).string).to.equal("Bob & Rob");
	})


	// it("should insert & in between each name", function(){
	// 	expect(amp(["Bob","Rob","Tom","Guy"])).to.equal("Bob & Rob & Tom & Guy");
	// })
})