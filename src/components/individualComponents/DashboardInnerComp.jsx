import { useState, useEffect } from "react";
import { getOrders, getProducts, getUsers } from "../../helpers/queries";
import ProductsDashboard from "./ProdDashboard.jsx";
import UsersDashboard from "./UsersDashboard.jsx";
import OrdersDashboard from "./OrdersDashboard.jsx";
import CreateEditDashboard from "./CreateEditDashboard.jsx";

const DashboardInnerComp = ({
    dashboard = false,
    creating = false,
    editing = false,
    manageUsers = false,
}) => {
    //Obtain product's array on Mounting stage from API
    const [productsArray, setProductsArray] = useState([]);
    const [usersArray, setUsersArray] = useState([]);
    const [ordersArray, setOrdersArray] = useState([]);
    /* Cuando se actualizan los productos */
    useEffect(() => {
        obtainPoducts();
    }, [productsArray]);
    /* Cuando se actualizan los usuarios */
    useEffect(() => {
        obtainUsers();
    }, [usersArray]);
    /* Cuando se actualizan las ordenes */
    useEffect(() => {
        obtainOrders();
    }, [ordersArray]);

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

    if (dashboard) {
        return (
            <section className="dashboardAdmin">
                <ProductsDashboard
                    productsArray={productsArray}
                ></ProductsDashboard>
            </section>
        );
    }
    if (creating) {
        return (
            <section className="dashboardAdmin">
                <CreateEditDashboard></CreateEditDashboard>;
            </section>
        );
    }
    if (editing) {
        return (
            <section className="dashboardAdmin">
                <CreateEditDashboard></CreateEditDashboard>;
            </section>
        );
    }
    if (manageUsers) {
        return (
            <section className="dashboardAdmin">
                <UsersDashboard usersArray={usersArray}></UsersDashboard>;
            </section>
        );
    }
};
export default DashboardInnerComp;
