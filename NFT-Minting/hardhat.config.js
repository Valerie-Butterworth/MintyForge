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
        "0xed9cb6cd2a08223b448d094f4af580977f2a7960e348a61646cee4b77036db47",
        "0x9bf2643263ec41ca53e2a7b3374a53e99fbecf6244d02c096140a8f917a89a7d",
        "0xd10a68258d4c91ec108dc38604936d32484b8b6472cad87a8c034e25d6812216",
        "0xb6209b896bf001bc0ac103a7a7cc0dff3917861765df925721880f9a2ea143df",
        "0x46fd53f652850abbe272f7da59f2063c03e2282029a33a5710205731b8e6445a",
        "0xbf62ff5db9a6cfba90534713546f2d0594480d6c0c4f30796117409987483c1a",
        "0xc5f0c128cd73526a4029a55e47a5766f2d9c30682b74c10046c6a258507e1476",
        "0xc750f2fb4ce593cea067c02681122280cad4bad61543d3200a482af7b182b97b",
        "0x54859f23ffdd568e6936553db8f32fe0a9bba35b0c350ab444dc1e28291c0aad",
        "0xfff2709a4c5fd1509d8a46bfaa96f333d7059f43e6591696e067777d29da4bd4",
      ]
    }
  }
};
