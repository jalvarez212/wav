const ethers = require('ethers')
const solc = require('solc');
const fs = require("fs");


var provider = new ethers.providers.InfuraProvider("goerli", '54458b95c9b541c09452a4a48c3d3376');


let wallet = ethers.Wallet.fromMnemonic('build argue swap toilet voyage divorce twin decrease amount cradle acid patrol');
wallet = wallet.connect(provider);




  



let IERC721 = fs.readFileSync("../contracts/IERC721.sol");
let IERC721Receiver = fs.readFileSync("../contracts/IERC721Receiver.sol");
let IERC721Metadata = fs.readFileSync("../contracts/IERC721Metadata.sol");
let SafeMath = fs.readFileSync("../contracts/SafeMath.sol");
let Address = fs.readFileSync("../contracts/Address.sol");
let Context = fs.readFileSync("../contracts/Context.sol");
let Strings = fs.readFileSync("../contracts/Strings.sol");
let ERC165 = fs.readFileSync("../contracts/ERC165.sol");
let IERC165 = fs.readFileSync("../contracts/IERC165.sol");
let Math = fs.readFileSync("../contracts/Math.sol");
let SignedMath = fs.readFileSync("../contracts/SignedMath.sol");
let ERC721 = fs.readFileSync("../contracts/ERC721.sol");
let Ownable = fs.readFileSync("../contracts/Ownable.sol");
let ERC721URIStorage = fs.readFileSync("../contracts/ERC721URIStorage.sol");
let Counters = fs.readFileSync("../contracts/Counters.sol");




var nft_contract = {

  language: 'Solidity',
  sources: {
    'st.sol': {
      content: 

      `
      // SPDX-License-Identifier: MIT
      
      pragma solidity ^0.8.4;
      
      import "contracts/ERC721.sol";
      import "contracts/ERC721URIStorage.sol";
      import "contracts/Ownable.sol";
      import "contracts/Counters.sol";
     
      contract Myt is ERC721, ERC721URIStorage, Ownable {
        using Counters for Counters.Counter;
    
        Counters.Counter private _tokenIdCounter;
    
        constructor() ERC721("st", "qqq") {}
    
        function safeMint(address to, string memory uri) public onlyOwner {
            uint256 tokenId = _tokenIdCounter.current();
            _tokenIdCounter.increment();
            _safeMint(to, tokenId);
            _setTokenURI(tokenId, uri);
        }
    
        // The following functions are overrides required by Solidity.
    
        function _burn(uint256 tokenId) internal override(ERC721, ERC721URIStorage) {
            super._burn(tokenId);
        }
    
        function tokenURI(uint256 tokenId)
            public
            view
            override(ERC721, ERC721URIStorage)
            returns (string memory)
        {
            return super.tokenURI(tokenId);
        }
    }
    
    `

}
},
settings: {
  outputSelection: {
    '*': {
      '*': ['*']
    }
  }
}
};

//import "./contracts/Math.sol";
//import "./contracts/SignedMath.sol";

// let IERC721 = fs.readFileSync("./contracts/IERC721.sol");
// let IERC721Receiver = fs.readFileSync("./contracts/IERC721Receiver.sol");
// let IERC721Metadata = fs.readFileSync("./contracts/IERC721Metadata.sol");
// let SafeMath = fs.readFileSync("./contracts/SafeMath.sol");
// let Address = fs.readFileSync("./contracts/Address.sol");
// let Context = fs.readFileSync("./contracts/Context.sol");
// let Strings = fs.readFileSync("./contracts/Strings.sol");
// let ERC165 = fs.readFileSync("./contracts/ERC165.sol");
// let IERC165 = fs.readFileSync("./contracts/IERC165.sol");
// let Math = fs.readFileSync("./contracts/Math.sol");
// let SignedMath = fs.readFileSync("./contracts/SignedMath.sol");

function findImports(path) {
  if (path === 'contracts/IERC721.sol')
    return {
      contents:
        IERC721.toString('utf8')
    };
  if (path === 'contracts/IERC721Receiver.sol')
    return {
      contents:
        IERC721Receiver.toString('utf8')
    };
  if (path === 'contracts/IERC721Metadata.sol')
    return {
      contents:
        IERC721Metadata.toString('utf8')
    };
  if (path === './contracts/SafeMath.sol')
    return {
      contents:
        SafeMath.toString('utf8')
    };
  if (path === 'contracts/Address.sol')
    return {
      contents:
        Address.toString('utf8')
    };
  if (path === 'contracts/Context.sol')
    return {
      contents:
        Context.toString('utf8')
    };
  if (path === 'contracts/Strings.sol')
    return {
      contents:
        Strings.toString('utf8')
    };
  if (path === 'contracts/ERC165.sol')
    return {
      contents:
        ERC165.toString('utf8')
    };
  if (path === 'contracts/IERC165.sol')
    return {
      contents:
        IERC165.toString('utf8')
    };
  if (path === 'contracts/Math.sol')
    return {
      contents:
        Math.toString('utf8')
    };
  if (path === 'contracts/SignedMath.sol')
    return {
      contents:
        SignedMath.toString('utf8')
    };
    if (path === 'contracts/ERC721.sol')
    return {
      contents:
        ERC721.toString('utf8')
    };
    if (path === 'contracts/ERC721URIStorage.sol')
    return {
      contents:
      ERC721URIStorage.toString('utf8')
    };
    if (path === 'contracts/Ownable.sol')
    return {
      contents:
      Ownable.toString('utf8')
    };
    if (path === 'contracts/Counters.sol')
    return {
      contents:
      Counters.toString('utf8')
    };
  else return { error: 'File not found' };
}



var output = JSON.parse(
  solc.compile(JSON.stringify(nft_contract), { import: findImports })
);

let abi;
let bytecode;

for (var contractName in output.contracts['st.sol']) {
  console.log(
    contractName +
      ': ' +
      output.contracts['st.sol'][contractName].evm.bytecode.object
  );
 

  
  abi = output.contracts['st.sol'][contractName].abi;
  bytecode = output.contracts['st.sol'][contractName].evm.bytecode.object;
  }

let contract = new ethers.Contract( '0x9B58A24E81700e72E451936c656c7B76b817333D' , abi , wallet )
contract.functions.safeMint('0xefF709724187e806c4d6195C3Fd5c2ec08196c0B','https://unsplash.com/photos/yMSecCHsIBc').then(function(tx){console.log(tx)})

//contract.functions.tokenURI(0).then(function(tx){console.log(tx)})



