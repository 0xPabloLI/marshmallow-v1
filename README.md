# marshmallow-v1

Smart contracts for the Marshmallow V1

## Deployed contracts

- Rinkeby testnet
  - Marshmallow address: [0x282C5d6Eab38e98862426bCFB51D366b7C5DE3f5](https://rinkeby.etherscan.io/address/0x282C5d6Eab38e98862426bCFB51D366b7C5DE3f5)
  - [NFT token 1](https://testnets.opensea.io/assets/0x282c5d6eab38e98862426bcfb51d366b7c5de3f5/1)
  - [NFT token 2](https://testnets.opensea.io/assets/0x282c5d6eab38e98862426bcfb51d366b7c5de3f5/2)

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
