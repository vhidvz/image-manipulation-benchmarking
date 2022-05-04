/**
 * Install dependencies by bellow command
 *
 * $ yarn add sharp
 */
const glob = require("glob");
const sharp = require('sharp');

(async () => {

  const path = process.argv[2]

  // list of all images
  const files = glob.sync(path + '/*')

  for (const file of files) {
    const image = await sharp(file)

    const meta = await image.metadata()

    const a = await image.resize(100, 100)
    const b = await image.resize(200, 200)
    const c = await image.resize(300, 300)

    const d = await image.resize(parseInt(meta.width / 2), parseInt(meta.height / 2))
    const e = await image.resize(parseInt(meta.width / 3), parseInt(meta.height / 3))
    const f = await image.resize(parseInt(meta.width / 4), parseInt(meta.height / 4))
    const g = await image.resize(parseInt(meta.width / 5), parseInt(meta.height / 5))

    // Avoid automatically garbage collection
    console.log(
      (await a.metadata()).channels, (await b.metadata()).channels,
      (await c.metadata()).channels, (await d.metadata()).channels,
      (await e.metadata()).channels, (await f.metadata()).channels,
      (await g.metadata()).channels)
  }

})()