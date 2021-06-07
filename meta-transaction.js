console.log(deployer.address);
const Marshmallow = new web3.eth.Contract(config.contractABI, config.contractAddress);

let functionSignature = Marshmallow.methods.create(20, 10, 'dragon', 0x0).encodeABI();
console.log(functionSignature);

let userAddress = deployer.address;
let nonce = await Marshmallow.methods.getNonce(userAddress).call();
console.log(nonce);
let message = {};
message.nonce = parseInt(nonce);
message.from = userAddress;
message.functionSignature = functionSignature;
const dataToSign = JSON.stringify({
  types: {
    EIP712Domain: [
      {name: "name", type: "string"},
      {name: "version", type: "string"},
      {name: "verifyingContract", type: "address"},
      {name: "salt", type: "bytes32"}
    ],
    MetaTransaction: [
      {name: "nonce", type: "uint256"},
      {name: "from", type: "address"},
      {name: "functionSignature", type: "bytes"}
    ]
  },
  domain: {
    name: "https://ipfs.io/ipfs/",
    version: "1",
    verifyingContract: "0xe9cd5d711AafBcc2800b815f5f947cDd713976D8",
    salt: "137"
  },
  primaryType: "MetaTransaction",
  message: message
});
console.log(dataToSign);
web3.eth.currentProvider.send(
  {
    jsonrpc: "2.0",
    id: 999999999999,
    method: "eth_signTypedData_v4",
    params: [userAddress, dataToSign]
  },
  function(error, response) {

    let { r, s, v } = getSignatureParameters(response.result);

    console.log(response.result);

    const recovered = sigUtil.recoverTypedSignature_v4({
      data: JSON.parse(dataToSign),
      sig: response.result
    });
    let tx = Marshmallow.methods.executeMetaTransaction(userAddress, functionSignature, r, s, v).send({
      from: userAddress
    });
  }
);

const getSignatureParameters = signature => {
  if (!web3.utils.isHexStrict(signature)) {
    throw new Error(
      'Given value "'.concat(signature, '" is not a valid hex string.')
    );
  }
  var r = signature.slice(0, 66);
  var s = "0x".concat(signature.slice(66, 130));
  var v = "0x".concat(signature.slice(130, 132));
  v = web3.utils.hexToNumber(v);
  if (![27, 28].includes(v)) v += 27;
  return {
    r: r,
    s: s,
    v: v
  };
};
