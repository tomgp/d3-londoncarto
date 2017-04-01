var tape = require("tape"),
    londoncarto = require("../");

tape("londoncarto() returns the answer to the ultimate question of life, the universe, and everything.", function(test) {
  test.equal(londoncarto.londoncarto(), 42);
  test.end();
});
