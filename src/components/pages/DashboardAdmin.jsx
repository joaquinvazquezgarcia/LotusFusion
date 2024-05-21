import { useState, useEffect } from "react";
import { getOrders, getProducts, getUsers } from "../../helpers/queries";
import "../../css/cssPages/adminDashboard.css";
import ProductsDashboard from "../individualComponents/ProdDashboard.jsx";
import UsersDashboard from "../individualComponents/UsersDashboard.jsx";
import OrdersDashboard from "../individualComponents/OrdersDashboard.jsx";
import CreateEditDashboard from "../individualComponents/CreateEditDashboard.jsx";
import addProduct from "../../assets/addProduct.svg";
import editProducts from "../../assets/editProducts.svg";
import orders from "../../assets/orders.svg";
import users from "../../assets/users.svg";
import logout from "../../assets/logout.svg";

const DashboardAdmin = () => {
    //Obtain product's array on Mounting stage from API
    const [productsArray, setProductsArray] = useState([]);
    const [usersArray, setUsersArray] = useState([]);
    const [ordersArray, setOrdersArray] = useState([]);
    useEffect(() => {
        obtainPoducts();
        obtainUsers();
        obtainOrders();
    }, []);
    const obtainPoducts = async () => {
        const response = await getProducts();
        if (response.status === 200) {
            const data = await response.json();
            setProductsArray(data);
        } else {
            //Show a nice error alert to admin
        }
    };
    const obtainUsers = async () => {
        const response = await getUsers();
        if (response.status === 200) {
            const data = await response.json();
            setUsersArray(data);
        } else {
            //Show a nice error alert to admin
        }
    };
    const obtainOrders = async () => {
        const response = await getOrders();
        if (response.status === 200) {
            const data = await response.json();
            setOrdersArray(data);
        } else {
            //Show a nice error alert to admin
        }
    };
    return (
        <main className="pagDashboardAdmin" id="dashboardAdminPage">
            <div className="dashboardSectionContainer">
                <section className="adminActionsSection">
                    <button className="adminActionBtn">
                        <img src={addProduct} alt="" />
                        Agregar nuevo producto
                    </button>
                    <button className="adminActionBtn">
                        <img src={editProducts} alt="" />
                        Administrar productos
                    </button>
                    <button className="adminActionBtn">
                        <img src={orders} alt="" />
                        Administrar pedidos
                    </button>
                    <button className="adminActionBtn">
                        <img src={users} alt="" />
                        Administrar usuarios
                    </button>
                    <button className="adminActionBtn logoutAdmin">
                        <img src={logout} alt="" />
                        Cerrar sesión de administrador
                    </button>
                </section>
                <section className="dashboardAdmin">
                    {/* <ProductsDashboard
                        productsArray={productsArray}
                    ></ProductsDashboard> */}
                    {/* <UsersDashboard usersArray={usersArray}></UsersDashboard> */}
                    {/* <OrdersDashboard
                        ordersArray={ordersArray}
                    ></OrdersDashboard> */}
                    <CreateEditDashboard></CreateEditDashboard>
                </section>
            </div>
        </main>
    );
};
export default DashboardAdmin;
