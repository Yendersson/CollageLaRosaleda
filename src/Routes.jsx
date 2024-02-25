import { useRoutes } from 'react-router-dom';
import Main from "./Components/Main"
import Collage from "./Components/Collage"
import Albums from './Components/Albums';

const Routes = () => {

    let routes = useRoutes([
        {
            path: '/',
            element: <Main/>,
            children:[
                {
                    path:"/",
                    element:<Albums/>,
                },
                {
                    path:"/:ref",
                    element:<Collage/>
                }
            ]
        },
    ])

    return routes;
}

export default Routes;
