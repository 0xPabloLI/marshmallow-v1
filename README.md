# marshmallow-v1

Smart contracts for the Marshmallow V1

## Deployed contracts

- Matic testnet
  - Deployer address: 0x3C44CdDdB6a900fa2b585dd299e03d12FA4293BC
  - ProxyRegistry address: [0x0124189Fc71496f8660dB5189F296055ED757632](https://explorer-mumbai.maticvigil.com/address/0x0124189Fc71496f8660dB5189F296055ED757632)
  - Marshmallow address: [0x4F41b941940005aE25D5ecB0F01BaDbc7065E2dD](https://explorer-mumbai.maticvigil.com/address/0x4F41b941940005aE25D5ecB0F01BaDbc7065E2dD)

- Rinkeby testnet
  - Deployer address: 0x3C44CdDdB6a900fa2b585dd299e03d12FA4293BC
  - ProxyRegistry address: [0xE252eBc212d6ebe1ed9b38acd806532707e2e7Ca](https://rinkeby.etherscan.io/address/0xE252eBc212d6ebe1ed9b38acd806532707e2e7Ca)
  - Marshmallow address: [0x6654dCEf5F156EbFC7F7d115a9952083Fd650697](https://rinkeby.etherscan.io/address/0x6654dCEf5F156EbFC7F7d115a9952083Fd650697)

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

setProxy(proxy.address): 用户允许proxy向买方转移NFT token
