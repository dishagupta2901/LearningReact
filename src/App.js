import React, { Suspense, lazy } from "react";
import ReactDOM from "react-dom/client";
import "../index.css"
import HeaderComponent from "./components/HeaderComponent";
import BodyComponent from "./components/BodyComponent";
import { Outlet, RouterProvider, createBrowserRouter } from "react-router-dom";
// import About from "./components/About";
import MenuComponent from "./components/MenuComponent";
import AppContext from "./utils/AppContext";
import { Provider } from "react-redux";
import AppStore from "./redux/AppStore";
import CartComponent from "./components/CartComponent";

const AppLayout = () =>{
    
    return(
        <Provider store={AppStore}>
            <AppContext.Provider value={{currentUser:"Disha"}}>
                <div className="App">
                    <HeaderComponent/>
                    <Outlet/>
                </div>
            </AppContext.Provider>
        </Provider>
        
        
    )
}

const About = lazy(()=> import("./components/About"));

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
                element : <Suspense fallback={<h1>Lazy Loading...</h1>}>
                                <About/>
                            </Suspense>
            },
            {
                path : "/restaurant/:id",
                element : <Suspense fallback={<h1>Lazy Loading...</h1>}>
                            <MenuComponent />
                        </Suspense>
            },
            {
                path : "/cart",
                element : <CartComponent />
            }
        ]
    }
    
])
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={AppRouter}/>);
