var Quiz = artifacts.require("Quiz");

module.exports = function(deployer) {
  deployer.deploy(Quiz, "2", "20");
};
