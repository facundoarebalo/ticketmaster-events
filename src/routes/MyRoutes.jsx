import { createBrowserRouter, RouterProvider } from "react-router-dom"
import Home from "../views/Home/Home"
import Detail from "../views/Detail/Detail"
import Error404 from "../views/Error404/Error404"
import Profile from "../views/Profile/Profile"


const router = createBrowserRouter([
    {
        path: "/",
        element: <Home />,
        errorElement: <Error404 />
    },
    {
        path: "/detail/:eventId",
        element: <Detail />,
    },
    {
        path: "/profile",
        element: <Profile/>,
        children: [

            {
                path: "my-info",
                element: <div>my info</div>
                
            },
            {
                path: "liked-events",
                element: <div>my events</div>

            }
        ]
    }

])

const MyRoutes = () => {
    return (
        <RouterProvider router={router} />
    )
}

export default MyRoutes
