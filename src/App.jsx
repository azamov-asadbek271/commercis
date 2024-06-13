import {RouterProvider,createBrowserRouter} from "react-router-dom"
import {About,
   Collections,
    Contact, 
    Error, 
    HomeLayout,
     Landing,
      Men,
       Women} from "./pages";
function App() {
  const routes = createBrowserRouter([
    {
      path: "/",
      element: <HomeLayout />,
      errorElement: <Error/>,
      children: [
        {
          index: true,
          element: <Landing />,
        },
        {
          path: "/collections",
          element: <Collections />,
        },
        {
          path: "/men",
          element: <Men />,
        },
        {
          path: "/women",
          element: <Women />,
        },
        {
          path: "/about",
          element: <About />,
        },
        {
          path: "/contact",
          element: <Contact />,
        },
      ],
    },
  ]);

  return <RouterProvider router={routes}/>;
}

export default App