const chai = require("chai");
const should = chai.should();
const firstDuplicate = require("../first_duplicate_in_array");

describe("firstDuplicate", () => {
  it("should return -1", () => {
    firstDuplicate().should.equal(-1);
  });

  it("should return 3", () => {
    firstDuplicate([2, 3, 3, 1, 5, 2]).should.equal(3);
  });

  it("should return -1 when no duplicates", () => {
    firstDuplicate([2, 4, 3, 5, 1]).should.equal(-1);
  })
});
