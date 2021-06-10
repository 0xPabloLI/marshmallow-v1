# marshmallow-v1

Smart contracts for the Marshmallow V1

## Deployed contracts

- Temp
  - Marshmallow address: [0xaCD64BB4f55D3836ba3F63c9dafe121AF28cA5A5](https://explorer-mainnet.maticvigil.com/address/0xaCD64BB4f55D3836ba3F63c9dafe121AF28cA5A5)
  - [NFT token 2](https://opensea.io/assets/matic/0xaCD64BB4f55D3836ba3F63c9dafe121AF28cA5A5/2)
  - [NFT token 3](https://opensea.io/assets/matic/0xaCD64BB4f55D3836ba3F63c9dafe121AF28cA5A5/3)

- Matic
  - Marshmallow address: [0xe9cd5d711AafBcc2800b815f5f947cDd713976D8](https://explorer-mainnet.maticvigil.com/address/0xe9cd5d711AafBcc2800b815f5f947cDd713976D8)
  - [NFT token 1](https://opensea.io/assets/matic/0xe9cd5d711AafBcc2800b815f5f947cDd713976D8/1)
  - [NFT token 2](https://opensea.io/assets/matic/0xe9cd5d711AafBcc2800b815f5f947cDd713976D8/2)

## Functions

- addMinter
- addWhitelistAdmin
- balanceOf
- balanceOfBatch
- contractURI
- creators
- isApprovedForAll
- isMinter
- isOwner
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
- setBaseMetadataURI
- supportsInterface
- symbol
- tokenMaxSupply
- tokenSupply
- transferOwnership
- uri

## 主要用法

create(20, 10, 'dragon', 0x0): 在合约中创建NFT token，返回值带tokenId

mint(other1.address, 2, 10, 0x0): 为用户other1铸造NFT，tokenId为2，数量为10

setTokenURI(tokenId, cid): 平台设置token uri
setTokenCID(tokenId, cid): 设置token uri
