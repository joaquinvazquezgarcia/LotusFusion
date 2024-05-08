import returnArrow from "../../assets/arrow-forward.svg";
import "../../css/cssPages/details.css";
import { HashLink } from "react-router-hash-link";
import { getProduct } from "../../helpers/queries";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const ProductDetails = ({ handleCart }) => {
    /* Load product on Mouning */
    const [product, setProduct] = useState({});
    useEffect(() => {
        loadProduct();
    });
    const { id } = useParams();
    const loadProduct = async () => {
        const response = await getProduct(id);
        if (response.status === 200) {
            const data = await response.json();
            setProduct(data);
        } else {
            /* Put a nice error message for user */
        }
    };

    return (
        <main className="pagDetails" id="detailsPage">
            <HashLink smooth to="/#mainMenu" className="detailsReturnBtn">
                <img src={returnArrow} alt="" />
            </HashLink>
            <section className="detailsSection">
                <div className="detailsImgContainer">
                    <img src={product.img} alt="" className="detailsImg" />
                </div>
                <div className="detailsTextContainer">
                    <h1 className="detailsProductName">{product.name}</h1>
                    <p className="detailsProductDesc">
                        {"- " + product.details}
                    </p>
                    <h3 className="detailsProductState">
                        {product.state
                            ? "Disponible"
                            : "No se encuentra disponible."}
                    </h3>
                    <h2 className="detailsProductPrice">
                        {product.price ? "$ " + product.price : ""}
                    </h2>
                    {product != undefined ? (
                        <button
                            value={JSON.stringify(product)}
                            className="detailsProductAddToCart"
                            onClick={e => handleCart(e)}
                        >
                            + Añadir a la Orden
                        </button>
                    ) : (
                        <p>Por favor vuelva atras e intente nuevamente.</p>
                    )}
                </div>
            </section>
        </main>
    );
};

export default ProductDetails;
