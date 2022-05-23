require("@nomiclabs/hardhat-waffle");
require("@nomiclabs/hardhat-ethers");
require("@nomiclabs/hardhat-etherscan");
const privateKey = "b569f00059b1a582c1b9402b0dea661b2a8828e85b8ed762fcac7adf4f0272df";
/**
 * @type import('hardhat/config').HardhatUserConfig
 */
module.exports = {
  defaultNetwork: "hardhat",
  networks: {
    hardhat: {
      // chainId: 1337,
      chainId: 97
    },
    bsctestnet: {
      url: "https://data-seed-prebsc-1-s1.binance.org:8545/",
      chainId: 97,
      accounts: [privateKey]
    },
    goerli:{
      url:"https://goerli.infura.io/v3/c0fc965275044e4db9aab4b55ef3aef8",
      chainId:5,
      accounts:[privateKey],
      apiKey:"c0fc965275044e4db9aab4b55ef3aef8"
    }
  },
  paths: {
    sources: "./contracts",
    artifacts: "./src/artifacts"
  },
  etherscan:{
    apiKey:"KYRQ1QQ6TU4GTDRHAD112I7QGY3GCURNS3"
  },
  solidity: {
    version: "0.8.4",
    settings: {
      optimizer: {
        enabled: true,
        runs: 200
      }
    }
  }
};
