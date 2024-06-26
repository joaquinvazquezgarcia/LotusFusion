import "./App.css";
import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/pages/Home.jsx";
import ProductDetails from "./components/pages/Details.jsx";
import PaginaCarrito from "./components/pages/Cart.jsx";

function App() {
    const [objectPage, setObjectPage] = useState(
        localStorage.getItem("objectPage") == undefined
            ? {}
            : JSON.parse(localStorage.getItem("objectPage"))
    );

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

    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route
                        path="/"
                        element={
                            <Home
                                setObjectPage={setObjectPage}
                                handleCart={handleCart}
                            ></Home>
                        }
                    ></Route>

                    <Route
                        path="/details"
                        element={
                            <ProductDetails
                                objectPage={objectPage}
                                handleCart={handleCart}
                            ></ProductDetails>
                        }
                    ></Route>
                    <Route
                        path="/cart"
                        element={<PaginaCarrito></PaginaCarrito>}
                    ></Route>
                </Routes>
            </BrowserRouter>
        </>
    );
}

export default App;
