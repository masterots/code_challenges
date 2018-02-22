const chai = require("chai");
const should = chai.should();
const LongestWord = require("../longestWord");

describe("LongestWord", () => {
  it("should return time", () => {
    LongestWord("fun&!! time").should.equal("time");
  });

  it("should return love", () => {
    LongestWord("I love dogs").should.equal("love");
  });

  it("should return 123456789", () => {
    LongestWord("123456789 98765432").should.equal("123456789");
  });
});
