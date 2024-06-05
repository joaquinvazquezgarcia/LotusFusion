import "../../css/cssPages/adminDashboard.css";
import addProduct from "../../assets/addProduct.svg";
import editProducts from "../../assets/editProducts.svg";
import orders from "../../assets/orders.svg";
import users from "../../assets/users.svg";
import logout from "../../assets/logout.svg";
import DashboardInnerComp from "../individualComponents/DashboardInnerComp.jsx";
import { Link } from "react-router-dom";

const DashboardAdmin = ({ dashboard, creating, editing, manageUsers }) => {
    return (
        <main className="pagDashboardAdmin" id="dashboardAdminPage">
            <div className="dashboardSectionContainer">
                <section className="adminActionsSection">
                    <Link
                        className="adminActionBtn"
                        to={"/admin/createProduct"}
                    >
                        <img src={addProduct} alt="" />
                        Agregar nuevo producto
                    </Link>
                    <Link className="adminActionBtn" to={"/admin/products"}>
                        <img src={editProducts} alt="" />
                        Administrar productos
                    </Link>
                    <Link className="adminActionBtn" to={"/admin/products"}>
                        <img src={orders} alt="" />
                        Administrar pedidos
                    </Link>
                    <Link className="adminActionBtn" to={"/admin/manageUsers"}>
                        <img src={users} alt="" />
                        Administrar usuarios
                    </Link>
                    <Link className="adminActionBtn logoutAdmin">
                        <img src={logout} alt="" />
                        Cerrar sesión de administrador
                    </Link>
                </section>
                <DashboardInnerComp
                    dashboard={dashboard}
                    creating={creating}
                    editing={editing}
                    manageUsers={manageUsers}
                />
            </div>
        </main>
    );
};
export default DashboardAdmin;
