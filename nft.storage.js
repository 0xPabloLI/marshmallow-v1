// import { NFTStorage, Blob } from 'nft.storage'
const { NFTStorage, File, Blob } = require("nft.storage");

const apiKey = ''

const client = new NFTStorage({ token: apiKey })

const content = new Blob(['hello world'])
const img = await client.storeBlob(content)
console.log("https://ipfs.io/ipfs/" + img);

const data = new Blob([
  JSON.stringify({
    'description': 'incognito',
    'external_url': 'incognito',
    'image': "https://ipfs.io/ipfs/" + img,
    'name': 'incognito',
    'attributes': []
  }, null, 2)
])
const meta = await client.storeBlob(data)
console.log("https://ipfs.io/ipfs/" + meta);
