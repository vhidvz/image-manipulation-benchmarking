/**
 * Install dependencies by bellow command
 *
 * $ yarn add image-js
 */
const glob = require("glob");
const { Image } = require('image-js');

(async () => {

  const path = process.argv[2]

  // list of all images
  files = glob.sync(path + '/*')

  for (const file of files) {
    const image = await Image.load(file)

    const width = image.width
    const height = image.height

    const a = await image.resize({ width: 100, height: 100 })
    const b = await image.resize({ width: 200, height: 200 })
    const c = await image.resize({ width: 300, height: 300 })

    const d = await image.resize({ width: parseInt(width / 2), height: parseInt(height / 2) })
    const e = await image.resize({ width: parseInt(width / 3), height: parseInt(height / 3) })
    const f = await image.resize({ width: parseInt(width / 4), height: parseInt(height / 4) })
    const g = await image.resize({ width: parseInt(width / 5), height: parseInt(height / 5) })

    // Avoid automatically garbage collection
    console.log(a.size, b.size, c.size, d.size, e.size, f.size, g.size)
  }

})()