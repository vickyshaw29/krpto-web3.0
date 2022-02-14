// https://eth-ropsten.alchemyapi.io/v2/NF1uIaiq29RqmHR_JvddJ8QxooQ9g5D2

require('@nomiclabs/hardhat-waffle');

module.exports = {
  solidity: '0.8.0',
  networks: {
    ropsten: {
      url: 'https://eth-ropsten.alchemyapi.io/v2/NF1uIaiq29RqmHR_JvddJ8QxooQ9g5D2',
      accounts: [
        '0a6a80d4f5a19e8db913dc35018c1d058eca8b89d59c087d675f3d4441251784',
      ],
    },
  },
};
