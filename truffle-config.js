
const HDWalletProvider = require('@truffle/hdwallet-provider');
const infuraKey = "https://kovan.infura.io/v3/f32a14c67fe74a709c30816215dc9f15";
const mnemonic = "1c49d2330c06ba699edb3ecc24a4f674db2f1b38d7ab699a6d49363253a3ad5c";




module.exports = {
  networks: {
    cldev: {
      host: '127.0.0.1',
      port: 8545,
      network_id: '*',
    },
    ganache: {
      host: '127.0.0.1',
      port: 7545,
      network_id: '*',
    },
    binance_testnet: {
      provider: () => new HDWalletProvider(mnemonic,'https://data-seed-prebsc-1-s1.binance.org:8545'),
      network_id: 97,
      confirmations: 10,
      timeoutBlocks: 200,
      skipDryRun: true
    },
    kovan: {
      provider:() => {
        return new HDWalletProvider(mnemonic, "https://kovan.infura.io/v3/f32a14c67fe74a709c30816215dc9f15")
      },
      network_id: '42',
      skipDryRun: true
    },
  },
  compilers: {
    solc: {
      version: '0.5.0',
    },
  },
}