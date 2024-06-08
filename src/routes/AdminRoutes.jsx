import { Routes, Route } from "react-router-dom";
import DashboardAdmin from "../components/pages/DashboardAdmin.jsx";

export const AdminRoutes = () => {
    return (
        <Routes>
            <Route
                path="/products"
                element={<DashboardAdmin dashboard={true}></DashboardAdmin>}
            ></Route>
            <Route
                path="/createProduct"
                element={<DashboardAdmin creating={true}></DashboardAdmin>}
            ></Route>
            <Route
                path="/editingProduct/:id"
                element={<DashboardAdmin editing={true}></DashboardAdmin>}
            ></Route>
            <Route
                path="/manageUsers"
                element={<DashboardAdmin manageUsers={true}></DashboardAdmin>}
            ></Route>
        </Routes>
    );
};
