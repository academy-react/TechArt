import React from "react";
import ReactDOM from "react-dom/client";

import { 
  RouterProvider, 
  createBrowserRouter, 
  useRouteError ,
  Outlet,
  Link,
} from "react-router-dom";

import App from "./App/App.jsx";
import { Home } from "./components/Article/Home/Home.jsx";

import "./index.css";


  <Home />

const Error = () => {
  const error = useRouteError();
  return (
    <h3>Error ........: {error.message}</h3>
  )
}
const MainLayout = () => {

  return (
    <div>
    <Outlet />     
        <Link to='/Home' style={{marginRight:20}}> نمایش بیشتر  /</Link>
        <Link to='/'>  نمایش کمتر  </Link>

    </div>
  )
}


const router = createBrowserRouter([
  {
    path:'/',
    element: <MainLayout />,
    children:[
      {path:'/' , element:<App /> },
      {path:'/Home', element:<Home /> , errorElement: <Error />},
    ],
},
{path:'*' , element:<h1> Error.............. </h1>},
]);



ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    {/* <App /> */}
    <RouterProvider router={router} />
  </React.StrictMode>
);
