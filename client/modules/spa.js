import path from 'path'
import fs from 'fs-extra'

/**
 * Copy dist files to public/ in spa mode.
 */
export default function SpaModule() {
  if (this.options.dev || this.options.mode !== 'spa') {
    return
  }

  this.nuxt.hook('generate:extendRoutes', routes => {
    const whiteList = ['/']
    const routesToGenerate = routes.filter(page =>
      whiteList.includes(page.route)
    )
    routes.splice(0, routes.length, ...routesToGenerate)
  })

  this.nuxt.hook('generate:done', async () => {
    const publicPath = path.resolve('./public')
    const distPath = path.resolve('./dist')

    await fs.remove(publicPath)
    await fs.copy(distPath, publicPath)

    try {
      await fs.remove(distPath)
    } catch (e) {
      console.error(`Can't delete: ${distPath}`)
    }
  })
}
