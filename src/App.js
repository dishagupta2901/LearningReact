import React from "react";
import ReactDOM from "react-dom/client";
import "../index.css"
import HeaderComponent from "./components/HeaderComponent";
import BodyComponent from "./components/BodyComponent";
import { Outlet, RouterProvider, createBrowserRouter } from "react-router-dom";
import About from "./components/About";
import MenuComponent from "./components/MenuComponent";
const AppLayout = () =>{
    return(
        <div className="App">
            <HeaderComponent/>
            <Outlet/>
        </div>
    )
}

const AppRouter = createBrowserRouter([
    {
        path : "/",
        element : <AppLayout/>,
        children : [
            {
                path : "/",
                element : <BodyComponent/>
            },
            {
                path : "/about",
                element : <About/>
            },
            {
                path : "/restaurant/:id",
                element : <MenuComponent/>
            }
        ]
    }
    
])
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={AppRouter}/>);
