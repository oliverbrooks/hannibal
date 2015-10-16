var expect = require("expect.js");
var hannibal = require("../../index");

describe("validator(date)", function () {

  describe("basic date", function () {
    var testSchema = hannibal({
      type: "date"
    });

    it("should validate a number", function () {
      var output = testSchema(new Date());

      expect(output.isValid).to.be(true);
    });

    it("should fail to validate if not a number", function () {
      var output = testSchema(null);

      expect(output.isValid).to.be(false);
      expect(output.error).to.be.a("object").and.to.have.keys("type");
    });
  });
});
