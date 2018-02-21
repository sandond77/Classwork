var titleize = require("./titleize.js");
var expect = require("chai").expect;

describe("titleize", function(){
	it("should capitalize the first letter of each word", function(){
		expect(titleize("bob")).to.equal("Bob");
	});


	it("should append periods to leading titles", function(){
		expect(titleize("mr bob")).to.equal("Mr. Bob");
	})

	it("should not change properly cased strings", function(){
		expect(titleize("BobbY")).to.equal("Bobby");
	})

	it("Add periods to captialized titles", function(){
		expect(titleize("Mr bob")).to.equal("Mr. Bob");
	})

	it("properly case mixed case strings", function(){
		expect(titleize("baNaNa")).to.equal("Banana");
	})

});