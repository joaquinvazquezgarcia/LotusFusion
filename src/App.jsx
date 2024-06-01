import "./App.css";
import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/pages/Home.jsx";
import ProductDetails from "./components/pages/Details.jsx";
import PaginaCarrito from "./components/pages/Cart.jsx";
import LoginRegister from "./components/pages/LoginRegister.jsx";
import DashboardAdmin from "./components/pages/DashboardAdmin.jsx";

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
                        path="/admin/products"
                        element={
                            <DashboardAdmin dashboard={true}></DashboardAdmin>
                        }
                    ></Route>
                    <Route
                        path="/admin/createProduct"
                        element={
                            <DashboardAdmin creating={true}></DashboardAdmin>
                        }
                    ></Route>
                    <Route
                        path="/admin/editingProduct"
                        element={
                            <DashboardAdmin editing={true}></DashboardAdmin>
                        }
                    ></Route>
                    <Route
                        path="/admin/manageUsers"
                        element={
                            <DashboardAdmin manageUsers={true}></DashboardAdmin>
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
