import Loadable from '@@/Loadable'

const Login = Loadable(() => import('@/pages/login'))
const Home = Loadable(() => import('@/pages/home'))

export {
  Login,
  Home
}
