const sigUtil = require("eth-sig-util");
const ethUtils = require("ethereumjs-util");

const { ethers } = require("hardhat");
const web3Abi = require("web3-eth-abi");

const { MockProvider } = require("ethereum-waffle");
const { Wallet } = require("ethers");

const domainType = [
  {
    name: "name",
    type: "string",
  },
  {
    name: "version",
    type: "string",
  },
  {
    name: "verifyingContract",
    type: "address",
  },
  {
    name: "salt",
    type: "bytes32",
  }
];

const metaTransactionType = [
  {
    name: "nonce",
    type: "uint256",
  },
  {
    name: "from",
    type: "address",
  },
  {
    name: "functionSignature",
    type: "bytes",
  }
];

let safeTransferFromAbi = {
  "inputs": [
    {
      "internalType": "address",
      "name": "_from",
      "type": "address"
    },
    {
      "internalType": "address",
      "name": "_to",
      "type": "address"
    },
    {
      "internalType": "uint256",
      "name": "_id",
      "type": "uint256"
    },
    {
      "internalType": "uint256",
      "name": "_amount",
      "type": "uint256"
    },
    {
      "internalType": "bytes",
      "name": "_data",
      "type": "bytes"
    }
  ],
  "name": "safeTransferFrom",
  "outputs": [],
  "stateMutability": "nonpayable",
  "type": "function"
};

const getTransactionData = async (user, nonce, abi, domainData, params) => {  // 考虑user拆为2个参数：address & privateKey
  const functionSignature = web3Abi.encodeFunctionCall(abi, params);

  let message = {};
  message.nonce = parseInt(nonce);
  message.from = await user.getAddress();
  message.functionSignature = functionSignature;

  const dataToSign = {
    types: {
      EIP712Domain: domainType,
      MetaTransaction: metaTransactionType,
    },
    domain: domainData, // 
    primaryType: "MetaTransaction",
    message: message,
  };

  const signature = sigUtil.signTypedData(ethUtils.toBuffer(user.privateKey), {
    data: dataToSign,
  });

  let r = signature.slice(0, 66);
  let s = "0x".concat(signature.slice(66, 130));
  let v = "0x".concat(signature.slice(130, 132));
  v = parseInt(v);
  if (![27, 28].includes(v)) v += 27;

  return {
    r,
    s,
    v,
    functionSignature,
  };
};

await marshmallow.addWhitelistAdmin(user2.address);
await marshmallow.create(20, 10, 'dragon', 0x0);

let name = await marshmallow.name();
let nonce = await marshmallow.getNonce(wallet.getAddress());
let version = "1";
let chainId = await marshmallow.getChainId();
let domainData = {
  name: name,
  version: version,
  verifyingContract: marshmallow.address,
  salt: '0x' + chainId.toHexString().substring(2).padStart(64, '0'),
};

let { r, s, v, functionSignature } = await getTransactionData(
  User1,
  nonce,
  safeTransferFromAbi,
  domainData,
  [user1.address, user2.address, 1, 3, 0x0]
);

let user = await wallet.getAddress();

const metaTransaction = await marshmallow.executeMetaTransaction(
  user,
  functionSignature,
  r,
  s,
  v
);
