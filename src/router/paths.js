/**
 * Define all of your application routes here
 * for more information on routes, see the
 * official documentation https://router.vuejs.org/en/
 */
export default [
  {
    path: '/draichiboard-old',
    view: 'Dashboard'
  },
  {
    path: '/about',
    name: 'About the dev',
    view: 'UserProfile'
  },
  {
    path: '/companies',
    name: 'Companies',
    view: 'TableList'
  },
  {
    path: '/projects',
    name: 'Projects',
    view: 'Typography'
  },
  {
    path: '/live-projects',
    name: 'Live projects',
    view: 'Maps'
  },
  {
    path: '/notifications',
    view: 'Notifications'
  }
]
