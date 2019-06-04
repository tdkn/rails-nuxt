export default async ctx => {
  if (process.browser) {
    await ctx.store.dispatch('nuxtClientInit', ctx)
  }
}
