import LinkLayout from "./layouts/LinkLayout";
import HomePage from './pages/HomePage'
import MainPage from "./pages/MainPage";
import AboutPage from "./pages/AboutPage";
import FactsPage from "./pages/FactsPage";
import ErrorPage from "./pages/ErrorPage";

const router =[
    {
        element : <LinkLayout />,
        path : '/',
        children :[
            {
                element : <HomePage />,
                path: true
            },
            {
                element : <MainPage />,
                path: '/main'
            },
            {
                element : <AboutPage />,
                path: '/about'
            },
            {
                element : <FactsPage />,
                path: '/facts'

            }
        ]
    },
    {
        element: <ErrorPage />,
        path: '*'
    }
]

export default router