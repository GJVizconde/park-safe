const goToRouter = (router: any, route: string) => {
  router.push({ path: `/${route}` })
}

export default goToRouter
