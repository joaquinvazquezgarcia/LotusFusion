import "./App.css";
import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/pages/Home.jsx";
import ProductDetails from "./components/pages/Details.jsx";
import PaginaCarrito from "./components/pages/Cart.jsx";
import LoginRegister from "./components/pages/LoginRegister.jsx";

import { ProtectedRoutes } from "./routes/ProtectedRoutes.jsx";
import { AdminRoutes } from "./routes/AdminRoutes.jsx";

function App() {
    const handleCart = event => {
        const itemObject = JSON.parse(event.target.value);
        const cartArray =
            localStorage.getItem("cart") == undefined
                ? []
                : JSON.parse(localStorage.getItem("cart"));

        let found = false;
        for (let i = 0; i < cartArray.length; i++) {
            if (cartArray[i].dish.name == itemObject.name) {
                found = true;
                cartArray[i].amount++;
                localStorage.setItem("cart", JSON.stringify(cartArray));

                break;
            }
        }
        if (!found) {
            const updatedArray = [
                ...cartArray,
                { dish: itemObject, amount: 1 },
            ];
            localStorage.setItem("cart", JSON.stringify(updatedArray));
            localStorage.setItem("cart", JSON.stringify(updatedArray));
        }
    };
    const [registering, setRegistering] = useState(false);

    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route
                        path="/"
                        element={<Home handleCart={handleCart}></Home>}
                    ></Route>

                    <Route
                        path="/details/:id"
                        element={
                            <ProductDetails
                                handleCart={handleCart}
                            ></ProductDetails>
                        }
                    ></Route>
                    <Route
                        path="/cart"
                        element={<PaginaCarrito></PaginaCarrito>}
                    ></Route>
                    <Route
                        exact
                        path="/admin/*"
                        element={
                            <ProtectedRoutes>
                                <AdminRoutes />
                            </ProtectedRoutes>
                        }
                    ></Route>
                    <Route
                        path="/login"
                        element={
                            <LoginRegister
                                registering={registering}
                                setRegistering={setRegistering}
                            ></LoginRegister>
                        }
                    ></Route>
                </Routes>
            </BrowserRouter>
        </>
    );
}

export default App;
