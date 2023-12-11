import { useRoutes } from 'react-router-dom'

import Home from '../Pages/Home/Home'
import MyAccount from '../Pages/MyAccount/MyAccount'
import MyOrder from '../Pages/MyOrder/MyOrder'
import NotFound from '../Pages/NotFound/NotFound'
import SignIn from '../Pages/SignIn/SignIn'


const Routes = () => {
    
    const routes = useRoutes([
        {path: '/', element: <Home />},
        {path: '/myaccount', element: <MyAccount />},
        {path: '/myorder', element: <MyOrder />},
        {path: '/signin', element: <SignIn />},
        {path: '*', element: <NotFound />},
    ])

    return routes

}

export default Routes;