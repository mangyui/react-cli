import loadable from '@/utils/loadable'
  
// import LoginView from '@/views/Login'
// import HomeView from '@/views/Home'
const LoginView = loadable(() => import('@/views/Login'))
const HomeView = loadable(() => import('@/views/Home'))

const routes = [
  { path: '/home', exact: false, name: '首页', component: HomeView, auth: [0] },
  { path: '/login', exact: false, name: '登录', component: LoginView, auth: [0] }
]


export default routes
