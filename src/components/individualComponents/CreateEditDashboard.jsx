import "../../css/cssComponents/createEditDashboard.css";
import { useState } from "react";
import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import thumb from "../../assets/thumb.svg";
import { validateProdName } from "../../helpers/productValidations.js";
import { validateProdPrice } from "../../helpers/productValidations.js";
import { validateProdDesc } from "../../helpers/productValidations.js";
import { validateProdUrl } from "../../helpers/productValidations.js";
import {
    deleteProduct,
    getProduct,
    newProduct,
} from "../../helpers/queries.js";

const CreateEditDashboard = ({ editing }) => {
    const [productId, setProductId] = useState();
    const [product, setProduct] = useState({});
    const [productName, setProductName] = useState("");
    const [productPrice, setProductPrice] = useState("");
    const [productDescription, setProductDescription] = useState("");
    const [productUrl, setProductUrl] = useState("");
    const [productStock, setProductStock] = useState(true);
    const [productStockState, setProductStockState] = useState(true);
    const [productNameErr, setProductNameErr] = useState("");
    const [productPriceErr, setProductPriceErr] = useState("");
    const [productDescriptionErr, setProductDescriptionErr] = useState("");
    const [productUrlErr, setProductUrlErr] = useState("");
    const [productStockErr, setProductStockErr] = useState("");
    const navigation = useNavigate();

    const handleSubmit = e => {
        e.preventDefault();
        if (
            validateProdName(productName, setProductNameErr) &&
            validateProdPrice(productPrice, setProductPriceErr) &&
            validateProdDesc(productDescription, setProductDescriptionErr) &&
            validateProdUrl(productUrl, setProductUrlErr)
        ) {
            if (editing) {
                deleteProduct(productId);
            }
            setProduct({
                name: productName,
                price: productPrice,
                details: productDescription,
                img: productUrl,
                state: productStock,
            });
        }
    };
    useEffect(() => {
        if (
            productName &&
            productPrice &&
            productDescription &&
            productUrl &&
            productStock
        ) {
            newProduct(product);
            /* Clear form*/
            setProductName("");
            setProductPrice("");
            setProductDescription("");
            setProductUrl("");
            /* navigation("/admin/products"); */
        }
    }, [product]);

    if (editing) {
        useEffect(() => {
            loadProduct();
        }, []);
        const { id } = useParams();
        const loadProduct = async () => {
            const response = await getProduct(id);
            if (response.status === 200) {
                const data = await response.json();
                setProductName(data.name);
                setProductPrice(data.price);
                setProductDescription(data.details);
                setProductUrl(data.img);
                setProductId(data.id);
            } else {
                /* Put a nice error message for user */
            }
        };
    }

    return (
        <section className="createEditSection">
            <h1 className="createEditTitle">AGREGAR NUEVO PRODUCTO</h1>
            <form
                className="createEditForm"
                action="create"
                id="createProdForm"
            >
                <label className="createEditLabel" htmlFor="createProdName">
                    NOMBRE DEL PRODUCTO
                </label>
                <input
                    value={productName}
                    className="createEditInput"
                    type="text"
                    name="productName"
                    id="createProdName"
                    placeholder="Ej: PAD TAILANDES"
                    onChange={e => {
                        validateProdName(e.target.value, setProductNameErr);
                        setProductName(e.target.value.toUpperCase());
                    }}
                />
                <p className="productInputAlert">{productNameErr}</p>
                <label className="createEditLabel" htmlFor="createProdPrice">
                    PRECIO
                </label>
                <input
                    value={productPrice}
                    className="createEditInput"
                    type="number"
                    name=""
                    id="createProdPrice"
                    placeholder="Ej: 5600"
                    onChange={e => {
                        validateProdPrice(e.target.value, setProductPriceErr);
                        setProductPrice(e.target.value);
                    }}
                />
                <p className="productInputAlert">{productPriceErr}</p>
                <label className="createEditLabel" htmlFor="createProdDesc">
                    DESCRIPCIÓN DEL PRODUCTO
                </label>
                <textarea
                    value={productDescription}
                    name="description"
                    id="createProdDesc"
                    className="createEditInput textarea"
                    placeholder="Ej: - Filete de Pollo salteado con curry rojo y arroz."
                    onChange={e => {
                        validateProdDesc(
                            e.target.value,
                            setProductDescriptionErr
                        );
                        setProductDescription(e.target.value);
                    }}
                ></textarea>
                <p className="productInputAlert">{productDescriptionErr}</p>
                <label className="createEditLabel" htmlFor="createProdUrl">
                    {"IMAGEN DEL PRODUCTO (URL)"}
                </label>
                <input
                    value={productUrl}
                    className="createEditInput"
                    type="url"
                    name=""
                    id="createProdUrl"
                    placeholder="Ej: https://images.com/product/pad-Thai"
                    onChange={e => {
                        validateProdUrl(e.target.value, setProductUrlErr);
                        setProductUrl(e.target.value);
                    }}
                />
                <p className="productInputAlert">{productUrlErr}</p>
                <label className="createEditLabel" htmlFor="createProdStock">
                    DISPONIBLE:
                </label>
                <div className="createEditSwitch">
                    <label className="switch">
                        <input
                            type="checkbox"
                            defaultChecked
                            id="createProdStock"
                            onChange={e => {
                                setProductStock(e.target.checked);
                                setProductStockState(
                                    productStockState ? false : true
                                );
                            }}
                        />
                        <span className="slider round"></span>
                    </label>
                    <p className="productSwitchState">
                        <span>
                            <img
                                src={thumb}
                                className={
                                    productStockState
                                        ? "thumb up"
                                        : "thumb down"
                                }
                                alt="pulgar"
                            />
                        </span>
                        {productStockState
                            ? "El producto se encuentra disponible."
                            : "El producto no se encuentra disponible."}
                    </p>
                </div>
                <p className="productInputAlert">{productStockErr}</p>
                <button
                    className="createEditSubmit"
                    type="submit"
                    onClick={e => handleSubmit(e)}
                >
                    {!editing ? "+ Agregar producto" : "Editar producto"}
                </button>
            </form>
        </section>
    );
};

export default CreateEditDashboard;
