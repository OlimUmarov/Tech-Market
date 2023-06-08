import { createBrowserRouter } from 'react-router-dom'
import { PublicLayout } from '../components/layout/PublicLayout'
import { Error } from '../components/error/Error'
import { Home } from '../pages/Home'
import { PrivateLayout } from '../components/layout/PrivateLayout'

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
        index: true,
    },
    {
        path: '/wishes',
        errorElement: <PublicLayout><Error/></PublicLayout>,
        element: <PublicLayout><Home/></PublicLayout>,
        index: true,
    },
    {
        path: '/cart',
        errorElement: <PublicLayout><Error/></PublicLayout>,
        element: <PublicLayout><Home/></PublicLayout>,
        index: true,
    },
    {
        path: '/category',
        errorElement: <PublicLayout><Error/></PublicLayout>,
        element: <PublicLayout><Home/></PublicLayout>,
        index: true,
    },
])

export const privateRoutes = createBrowserRouter([
    {
        path: '/',
        errorElement: <PrivateLayout><Error/></PrivateLayout>,
        element: <PrivateLayout><Home/></PrivateLayout>,
        index: true,
    },
    {
        path: '/search',
        errorElement: <PrivateLayout><Error/></PrivateLayout>,
        element: <PrivateLayout><Home/></PrivateLayout>,
        index: true,
    },
    {
        path: '/wishes',
        errorElement: <PrivateLayout><Error/></PrivateLayout>,
        element: <PrivateLayout><Home/></PrivateLayout>,
        index: true,
    },
    {
        path: '/cart',
        errorElement: <PrivateLayout><Error/></PrivateLayout>,
        element: <PrivateLayout><Home/></PrivateLayout>,
        index: true,
    },
    {
        path: '/category',
        errorElement: <PrivateLayout><Error/></PrivateLayout>,
        element: <PrivateLayout><Home/></PrivateLayout>,
        index: true,
    },
])