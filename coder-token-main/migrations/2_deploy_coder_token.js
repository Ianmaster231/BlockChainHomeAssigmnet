var IZToken = artifacts.require("./IZToken.sol");

module.exports = function(deployer) {
  deployer.deploy(IZToken);
};