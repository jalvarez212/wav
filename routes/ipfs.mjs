import * as IPFS from 'ipfs-core'
import all from 'it-all'
import { concat as uint8ArrayConcat } from 'uint8arrays/concat'
import { fromString as uint8ArrayFromString } from 'uint8arrays/from-string'
import { toString as uint8ArrayToString } from 'uint8arrays/to-string'
import { create, globSource } from 'ipfs'


  



async function main () {
  const node = await IPFS.create()
  const version = await node.version()
  console.log('Yeeerrrrr')

  console.log('Version:', version.version)

  const file = await node.add({
    path: 'hello.jpg',
    content: globSource('./q.png')
  })



  console.log('Added file:', file.path, file.cid.toString())

  const data = uint8ArrayConcat(await all(node.cat(file.cid)))

  console.log('Added file contents:', uint8ArrayToString(data))
}

main()