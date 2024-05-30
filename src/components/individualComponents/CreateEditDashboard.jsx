import "../../css/cssComponents/createEditDashboard.css";
import { useState } from "react";
import { useEffect } from "react";
import thumb from "../../assets/thumb.svg";
import { validateProdName } from "../../helpers/productValidations.js";
import { validateProdPrice } from "../../helpers/productValidations.js";
import { validateProdDesc } from "../../helpers/productValidations.js";
import { validateProdUrl } from "../../helpers/productValidations.js";

const CreateEditDashboard = () => {
    const [product, setProduct] = useState({});
    const [productName, setProductName] = useState();
    const [productPrice, setProductPrice] = useState();
    const [productDescription, setProductDescription] = useState();
    const [productUrl, setProductUrl] = useState();
    const [productStock, setProductStock] = useState(true);
    const [productStockState, setProductStockState] = useState(true);
    const [productNameErr, setProductNameErr] = useState("");
    const [productPriceErr, setProductPriceErr] = useState("");
    const [productDescriptionErr, setProductDescriptionErr] = useState("");
    const [productUrlErr, setProductUrlErr] = useState("");
    const [productStockErr, setProductStockErr] = useState("");

    const handleSubmit = e => {
        e.preventDefault();
        if (
            validateProdName(productName, setProductNameErr) &&
            validateProdPrice(productPrice, setProductPriceErr) &&
            validateProdDesc(productDescription, setProductDescriptionErr) &&
            validateProdUrl(productUrl, setProductUrlErr)
        ) {
            if (
                productName != undefined &&
                productPrice != undefined &&
                productDescription != undefined &&
                productUrl != undefined &&
                productStock != undefined
            ) {
                setProduct({
                    name: productName,
                    price: productPrice,
                    details: productDescription,
                    img: productUrl,
                    state: productStock,
                });
                console.log(product);
            }
        }
    };

    /* update product on change (must delete this)*/
    useEffect(
        () => {
            console.log(
                productName,
                productPrice,
                productDescription,
                productUrl,
                productStock
            );
        },
        [],
        [
            productName,
            productPrice,
            productDescription,
            productUrl,
            productStock,
        ]
    );

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
                    className="createEditInput"
                    type="text"
                    name="productName"
                    id="createProdName"
                    placeholder="Ej: PAD TAILANDES"
                    onChange={e => {
                        validateProdName(e.target.value, setProductNameErr);
                        setProductName(e.target.value);
                    }}
                />
                <p className="productInputAlert">{productNameErr}</p>
                <label className="createEditLabel" htmlFor="createProdPrice">
                    PRECIO
                </label>
                <input
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
                    + Agregar producto
                </button>
            </form>
        </section>
    );
};

export default CreateEditDashboard;
