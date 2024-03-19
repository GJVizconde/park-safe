export interface RouterLink {
  path: string
  name: string
  title: string
}

export const routerLinks: RouterLink[] = [
  {
    path: '/register',
    name: 'register',
    title: 'Register'
  },
  {
    path: '/login',
    name: 'login',
    title: 'Login'
  }
]
