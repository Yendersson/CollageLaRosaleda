import { useRoutes } from 'react-router-dom';
import Main from "./Components/Main"
import Collage from "./Components/Collage"

const Routes = () => {

    let routes = useRoutes([
        {
            path: '/',
            element: <Main/>
        },
        {
            path: '/:ref',
            element: <Collage/>
        }
    ])

    return routes;
}

export default Routes;
