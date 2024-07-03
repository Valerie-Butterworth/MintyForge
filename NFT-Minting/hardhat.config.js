require("@nomicfoundation/hardhat-toolbox");

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.24",
  networks: {
    hardhat: {
      chainId: 1337,
    },
    ganache: {
      url: "http://127.0.0.1:7545",
      accounts: [
        "0x44CB82166EcEa3a2D910E181Ef20710D9810913E",
        "0xE6867a48214F6BDEFBfa190dFCd895f690E9D894",
        "0x2759F5Ae038E4Bcea93e565Dab1B56a3EB9eB8AA",
        "0x82277d355Ec2DB2bdF7135b466858B57cf487d68",
        "0xD52faf23C602181b12bbcdA52154339e310437cF",
        "0x1165e4A5A14Ebf8112CB77296cc52F6342095429",
        "0x49dc27eAe2E2984aBB73b36223B9E17293E65D5A",
        "0x0bE166840e0Ade14D33837802cE366c2E10527Bc",
        "0x2F7C280372E862F4D80096223eBEec3507EF1657",
        "0xeBb2C79E9a3e7889D12497f7DC19caB67c0C14de",
      ]
    }
  }
};
