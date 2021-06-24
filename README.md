# marshmallow-v1

Smart contracts for the Marshmallow V1

## Deployed contracts

- Matic
  - Marshmallow address: [0x3B2FF0bE02653a8775e2ab60C6db5b9a3D86FDB9](https://explorer-mainnet.maticvigil.com/address/0x3B2FF0bE02653a8775e2ab60C6db5b9a3D86FDB9)
  - [NFT token 1](https://opensea.io/assets/matic/0x3B2FF0bE02653a8775e2ab60C6db5b9a3D86FDB9/1)
  - [NFT token 2](https://opensea.io/assets/matic/0x3B2FF0bE02653a8775e2ab60C6db5b9a3D86FDB9/2)

## Functions

- ERC712_VERSION
- addMinter
- addWhitelistAdmin
- balanceOf
- balanceOfBatch
- burn
- burnBatch
- contractURI
- create
- creators
- executeMetaTransaction
- getChainId
- getDomainSeperator
- getNonce
- isApprovedForAll
- isMinter
- isWhitelistAdmin
- maxSupply
- mint
- name
- owner
- removeMinter
- removeWhitelistAdmin
- renounceMinter
- renounceOwnership
- renounceWhitelistAdmin
- safeBatchTransferFrom
- safeTransferFrom
- setApprovalForAll
- setTokenURI
- supportsInterface
- symbol
- tokenMaxSupply
- tokenSupply
- transferOwnership
- uri

## 主要用法

create(postId, 20, 10, 'https://ipfs.io/ipfs/bafkreiewkeucchypjyuru67goraapvs2tuyntcs7nbktklicz2a223oea4', 0x0): 在合约中创建NFT token，返回值带tokenId

mint(account.address, 2, 10, 0x0): 为用户账户铸造NFT，tokenId为2，数量为10

safeBatchTransferFrom(fromAddress, toAddress, [tokenId1, tokenId2], [tokenAmount1, tokenAmount2], 0x0)

setTokenURI(tokenId, 'https://ipfs.io/ipfs/bafkreiewkeucchypjyuru67goraapvs2tuyntcs7nbktklicz2a223oea4'): 平台设置token uri
