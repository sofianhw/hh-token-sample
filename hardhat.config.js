require("@nomicfoundation/hardhat-toolbox");

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: {
    compilers: [
      {
        version: "0.8.7",
      },
    ],   
  }, 
  defaultNetwork: "ganache",
  networks: {
    ganache: {
      	url: "http://127.0.0.1:7545",
	      gasLimit: 6000000000,
      	defaultBalanceEther: 10,
    },
    goerli: {
      url: "https://eth-goerli.g.alchemy.com/v2/ALCHEMY-KEY",
      accounts: ["PRIVATE-KEY"],
      gasPrice: 20000000000,
    },
  },
};