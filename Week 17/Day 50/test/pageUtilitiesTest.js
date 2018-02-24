var pageUtilities = require("../src/pageUtilities.js");
var expect = require("chai").expect;
var should = require("chai").should();

describe("Page Utilities", function(){
	var page_Utilities = new pageUtilities(10,3)

	it("Should return the total number of posts", function(){
		page_Utilities.posts.should.equal(10);
		expect(page_Utilities.posts).to.equal(10);
	});

	it("Should return the pagination limit", function(){
		page_Utilities.pagination.should.equal(3);
		expect(page_Utilities.pagination).to.equal(3);
	});

	it("Should return the total pages", function(){
		page_Utilities.totalPages().should.equal(4);
		expect(page_Utilities.totalPages()).to.equal(4);
	});


});