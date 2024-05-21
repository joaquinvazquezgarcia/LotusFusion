import "../../css/cssComponents/createEditDashboard.css";

const CreateEditDashboard = () => {
    const handleSubmit = e => {
        e.preventDefault();
    };
    return (
        <section className="createEditSection">
            <h1 className="createEditTitle">AGREGAR NUEVO PRODUCTO</h1>
            <form className="createEditForm" action="create">
                <label className="createEditLabel" htmlFor="">
                    NOMBRE DEL PRODUCTO
                </label>
                <input
                    className="createEditInput"
                    type="text"
                    name=""
                    id=""
                    placeholder="Ej: PAD TAILANDES"
                />
                <label className="createEditLabel" htmlFor="">
                    PRECIO
                </label>
                <input
                    className="createEditInput"
                    type="number"
                    name=""
                    id=""
                    placeholder="Ej: 5600"
                />
                <label className="createEditLabel" htmlFor="">
                    DESCRIPCIÓN DEL PRODUCTO
                </label>
                <textarea
                    name="description"
                    id=""
                    className="createEditInput textarea"
                    placeholder="Ej: - Filete de Pollo salteado con curry rojo y arroz."
                ></textarea>
                <label className="createEditLabel" htmlFor="">
                    {"IMAGEN DEL PRODUCTO (URL)"}
                </label>
                <input
                    className="createEditInput"
                    type="url"
                    name=""
                    id=""
                    placeholder="Ej: https://images.com/product/pad-Thai"
                />
                <label className="createEditLabel" htmlFor="">
                    DISPONIBLE:
                </label>
                <label className="switch">
                    <input type="checkbox" defaultChecked />
                    <span className="slider round"></span>
                </label>
                <button
                    className="createEditSubmit"
                    type="submit"
                    onClick={e => handleSubmit(e)}
                >
                    + Agregar producto
                </button>
            </form>
        </section>
    );
};

export default CreateEditDashboard;
