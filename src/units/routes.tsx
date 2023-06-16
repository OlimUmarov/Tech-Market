import { createBrowserRouter } from 'react-router-dom'
import { PublicLayout } from '../components/layout/public-layout/PublicLayout'
import { Error } from '../components/error/Error'
import { Home } from '../pages/Home'
import { DeliveryPoints } from '../pages/navigations/delivery-points/DeliveryPoints'
import { Orders } from '../pages/user/orders/Orders'
import { Questions } from '../pages/navigations/questions/Questions'
import { Cart } from '../pages/user/cart/Cart'
import { Favourites } from '../pages/user/favourites/Favourites'
import { Profile } from '../pages/user/profile/Profile'

export const publicRoutes = createBrowserRouter([
    {
        path: '/',
        errorElement: <PublicLayout><Error/></PublicLayout>,
        element: <PublicLayout><Home/></PublicLayout>,
        index: true,
    },
    {
        path: '/search',
        errorElement: <PublicLayout><Error/></PublicLayout>,
        element: <PublicLayout><Home/></PublicLayout>,
    },
    {
        path: '/category',
        errorElement: <PublicLayout><Error/></PublicLayout>,
        element: <PublicLayout><Home/></PublicLayout>,
    },
    {
        path: '/questions',
        errorElement: <PublicLayout><Error/></PublicLayout>,
        element: <PublicLayout><Questions/></PublicLayout>,
    },
    {
        path: '/my-orders',
        errorElement: <PublicLayout><Error/></PublicLayout>,
        element: <PublicLayout><Orders/></PublicLayout>,
    },
    {
        path: '/delivery-points',
        errorElement: <PublicLayout><Error/></PublicLayout>,
        element: <PublicLayout><DeliveryPoints/></PublicLayout>,
    },
    {
        path: '/favourites',
        errorElement: <PublicLayout><Error/></PublicLayout>,
        element: <PublicLayout><Favourites/></PublicLayout>,
    },
    {
        path: '/cart',
        errorElement: <PublicLayout><Error/></PublicLayout>,
        element: <PublicLayout><Cart/></PublicLayout>,
    },
    {
        path: '/profile',
        errorElement: <PublicLayout><Error/></PublicLayout>,
        element: <PublicLayout><Profile/></PublicLayout>,
    },
])

