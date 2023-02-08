import * as IPFS from 'ipfs-core'
import all from 'it-all'
import { concat as uint8ArrayConcat } from 'uint8arrays/concat'
import { fromString as uint8ArrayFromString } from 'uint8arrays/from-string'
import { toString as uint8ArrayToString } from 'uint8arrays/to-string'
import { create, globSource } from 'ipfs'

const globSourceOptions = {
    recursive: true
  };
  
  //example options to pass to IPFS
  const addOptions = {
    pin: true,
    wrapWithDirectory: true,
    timeout: 10000
  };
  


async function main () {
  const node = await IPFS.create()
  const version = await node.version()
  console.log('Yeeerrrrr')

  console.log('Version:', version.version)

  const file = await node.add({
    path: 'hello.jpg',
    content: globSource('./q.png', globSourceOptions)
  })



  console.log('Added file:', file.path, file.cid.toString())

  const data = uint8ArrayConcat(await all(node.cat(file.cid)))

  console.log('Added file contents:', uint8ArrayToString(data))
}

main()