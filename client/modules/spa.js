import path from 'path'
import fs from 'fs-extra'

/**
 * Copy dist files to public/ in spa mode.
 */
export default function SpaModule() {
  if (this.options.dev || this.options.mode !== 'spa') {
    return
  }

  const publicPath = path.resolve('./public')
  const distPath = path.resolve('./dist')

  this.nuxt.hook('generate:done', async () => {
    await fs.remove(publicPath)
    await fs.copy(distPath, publicPath)

    try {
      await fs.remove(distPath)
    } catch (e) {
      console.error(`Can't delete: ${distPath}`)
    }
  })
}
