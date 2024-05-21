import "../../css/cssComponents/prodDashboard.css";
import check from "../../assets/check.svg";
import undo from "../../assets/undo.svg";
import deleteImg from "../../assets/delete.svg";

const OrdersDashboard = ({ ordersArray }) => {
    return (
        <table className="dashboardTable productos">
            <thead>
                <tr className="head">
                    <th scope="col">NOMBRE DEL USUARIO</th>
                    <th scope="col">FECHA</th>
                    <th scope="col">PRODUCTOS</th>
                    <th scope="col">ESTADO</th>
                    <th scope="col">ACCIONES</th>
                </tr>
            </thead>
            <tbody>
                {ordersArray.map(order => {
                    return (
                        <tr className="tableItem" key={order.id}>
                            <td>{order.user}</td>
                            <td>{order.date}</td>
                            <td>
                                {order.products.map(product => {
                                    product.name;
                                })}
                            </td>
                            <td>{order.state}</td>
                            <td className="edit">
                                {order.state === "Pendiente" ? (
                                    <button>
                                        <img src={check} title="Entregada" />
                                    </button>
                                ) : (
                                    <button>
                                        <img src={undo} title="Deshacer" />
                                    </button>
                                )}
                                <button>
                                    <img
                                        src={deleteImg}
                                        title="Eliminar Producto"
                                    />
                                </button>
                            </td>
                        </tr>
                    );
                })}
            </tbody>
        </table>
    );
};

export default OrdersDashboard;
