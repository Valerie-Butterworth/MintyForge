// SPDX-License-Identifier: MintyLicense
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract MintyPrinter is ERC721URIStorage, Ownable {

    // tokenCounters keeps track of NFTs printed. 256 is EVM's word byte size.
    uint256 public tokenCounter;

    constructor() ERC721("MintyPrinter", "MP") {
        tokenCounter = 0;
    }

    /*
        * This creates a new token,
        * sets it to the current counter as an ID,
        * and then assigns the tokenURI metadata to that token ID.
    */

    function createNFT(string memory tokenURI) public returns (uint256) {
        uint256 newTokenId = tokenCounter;
        _safeMint(msg.sender, newTokenId);
        _setTokenURI(newTokenId, tokenURI);
        tokenCounter++;
        return newTokenId;
    }
}