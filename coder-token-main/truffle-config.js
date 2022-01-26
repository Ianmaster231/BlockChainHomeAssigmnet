require('dotenv').config()

 const anemonic = process.env.MVEMONIC_PASSWORD;
 const RinkebyEndPoint = process.env.RinkebyEndPoint;
 const RinkbyWSEndpoint = process.env.RINKEBY_WS_END_POINT;

//const HDWalletProvider = require("@truffle/hdwallet-provider");

 const path = require("path")
module.exports = {
  // See http://truffleframework.com/docs/advanced/configuration
  // for more about customizing your Truffle configuration!
  networks: {
    development: {
      host: "127.0.0.1",
      port: 8545,
      network_id: "*" // Match any network id
    }
  },
  rinkeby:{
    provider:()=>{
      return new HDWalletProvider(anemonic, RinkbyWSEndpoint);
    },
    network_id: 4,
    gas:4500000,
    gasPrice: 1000000000,
  },
  compilers: {
    solc: {
      version: '0.8.0',
      parser: "solcjs",
    }
  }
};