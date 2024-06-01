import "../../css/cssComponents/prodDashboard.css";
import edit from "../../assets/editProducts.svg";
import deleteImg from "../../assets/delete.svg";
import { deleteProduct } from "../../helpers/queries";

const ProductsDashboard = ({ productsArray }) => {
    const handleClick = id => {
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
                                <img src={product.img} alt={product.name} />
                            </td>
                            <td className="edit">
                                <button>
                                    <img src={edit} title="Editar Producto" />
                                </button>
                                <button onClick={() => handleClick(product.id)}>
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

export default ProductsDashboard;
