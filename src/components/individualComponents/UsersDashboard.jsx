import "../../css/cssComponents/prodDashboard.css";
import edit from "../../assets/editProducts.svg";
import deleteImg from "../../assets/delete.svg";

const UsersDashboard = ({ usersArray }) => {
    return (
        <table className="dashboardTable productos">
            <thead>
                <tr className="head">
                    <th scope="col">NOMBRE DEL USUARIO</th>
                    <th scope="col">EMAIL</th>
                    <th scope="col">ESTADO</th>
                    <th scope="col">ACCIONES</th>
                </tr>
            </thead>
            <tbody>
                {usersArray.map(user => {
                    return (
                        <tr className="tableItem" key={user.id}>
                            <td>{user.name}</td>
                            <td>{user.email}</td>
                            <td>
                                {user.state == true ? "Activo" : "Inactivo"}
                            </td>
                            <td className="edit">
                                <button>
                                    <img src={edit} title="Editar Usuario" />
                                </button>
                                <button>
                                    <img
                                        src={deleteImg}
                                        title="Eliminar Usuario"
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

export default UsersDashboard;
