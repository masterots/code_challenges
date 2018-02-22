const chai = require("chai");
const should = chai.should();
const factorial = require("../factorial");

describe("factorial", () => {
  it("should return 24", () => {
    factorial(4).should.equal(24);
  });

  it("should return 120", () => {
    factorial(5).should.equal(120);
  });

  it("should return 40302", () => {
    factorial(8).should.equal(40320);
  });
});
