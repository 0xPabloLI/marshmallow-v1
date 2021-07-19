# marshmallow-v1

Smart contracts for the Marshmallow V1

## Deployed contracts

- Matic
  - Marshmallow address: [0xBbC4306F467109c65F09981133Ca6981121bA556](https://explorer-mainnet.maticvigil.com/address/0xBbC4306F467109c65F09981133Ca6981121bA556)
  - [NFT token 1](https://opensea.io/assets/matic/0xBbC4306F467109c65F09981133Ca6981121bA556/1)
  - [NFT token 2](https://opensea.io/assets/matic/0xBbC4306F467109c65F09981133Ca6981121bA556/2)

## Contracts&Miner use

1. Production:
    - Contract for Instagram: [0xBbC4306F467109c65F09981133Ca6981121bA556](https://polygonscan.com/address/0xBbC4306F467109c65F09981133Ca6981121bA556)
    - Contract for TikTok: [0xC2763a027c64C2d5F36eB90DF313429375fdfAaB](https://polygonscan.com/address/0xC2763a027c64C2d5F36eB90DF313429375fdfAaB)
    - Miner: [0x0DCfAa89Ff7Fc8fF241De89a79adDE87155e76cB](https://polygonscan.com/address/0x0DCfAa89Ff7Fc8fF241De89a79adDE87155e76cB)
2. Staging
    - Contract for Instagram: [0xCd814b5B44fe8eC56ae7322FF94a7f7CdF3817DF](https://polygonscan.com/address/0xCd814b5B44fe8eC56ae7322FF94a7f7CdF3817DF)
    - Contract for TikTok: [0x97b3Cdf1BF5f446013E7A85c5377B7d3c910fEB4](https://polygonscan.com/address/0x97b3Cdf1BF5f446013E7A85c5377B7d3c910fEB4)
    - Miner: [0xA6E1201B8D49DA4dF4da4fD092CB8F2d2e1CBf66](https://polygonscan.com/address/0xA6E1201B8D49DA4dF4da4fD092CB8F2d2e1CBf66)


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
