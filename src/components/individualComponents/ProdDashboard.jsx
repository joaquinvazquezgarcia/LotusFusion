import "../../css/cssComponents/prodDashboard.css";
import edit from "../../assets/editProducts.svg";
import deleteImg from "../../assets/delete.svg";
import { deleteProduct } from "../../helpers/queries";
import { Link } from "react-router-dom";

const ProductsDashboard = ({ productsArray }) => {
    const handleDeletion = id => {
        deleteProduct(id);
    };

    return (
        <table className="dashboardTable productos">
            <thead>
                <tr className="head">
                    <th scope="col">NOMBRE DEL PRODUCTO</th>
                    <th scope="col">PRECIO</th>
                    <th scope="col">DESCRIPCIÓN</th>
                    <th scope="col">{"IMAGEN (URL)"}</th>
                    <th scope="col">ESTADO</th>
                    <th scope="col">ACCIONES</th>
                </tr>
            </thead>
            <tbody>
                {productsArray.map(product => {
                    return (
                        <tr className="tableItem" key={product.id}>
                            <td>{product.name}</td>
                            <td>$ {product.price}</td>
                            <td>{product.details}</td>
                            <td>
                                <img
                                    className="productImg"
                                    src={product.img}
                                    alt={product.name}
                                />
                            </td>
                            <td
                                className={
                                    product.state ? "available" : "unavailable"
                                }
                            >
                                {product.state == true
                                    ? "Disponible"
                                    : "No disponible"}
                            </td>
                            <td className="edit">
                                <Link
                                    className="itemBtn"
                                    to={"/admin/editingProduct/" + product.id}
                                >
                                    <img
                                        className="manageImg"
                                        src={edit}
                                        title="Editar Producto"
                                    />
                                </Link>
                                <button
                                    className="itemBtn"
                                    onClick={() => handleDeletion(product.id)}
                                >
                                    <img
                                        className="manageImg"
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

export default ProductsDashboard;
