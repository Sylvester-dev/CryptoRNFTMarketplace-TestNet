const CryptoR = artifacts.require("CryptoR");
const PaymentGateway = artifacts.require("PaymentGateway");
const CryptoRMarketplace = artifacts.require("CryptoRMarketplace");

//first account in truffle becomes payment gateway wallet allowed to withdrawl funds
module.exports = function(deployer, networks, accounts) {
  deployer.deploy(CryptoRMarketplace, CryptoR.address, PaymentGateway.address, accounts[0]);
};   
