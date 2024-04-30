import returnArrow from "../../assets/arrow-forward.svg";
import "../../css/cssPages/details.css";
import { HashLink } from "react-router-hash-link";

const ProductDetails = ({ objectPage, handleCart }) => {
    return (
        <main className="pagDetails" id="detailsPage">
            <HashLink smooth to="/#mainMenu" className="detailsReturnBtn">
                <img src={returnArrow} alt="" />
            </HashLink>
            <section className="detailsSection">
                <div className="detailsImgContainer">
                    <img src={objectPage.img} alt="" className="detailsImg" />
                </div>
                <div className="detailsTextContainer">
                    <h1 className="detailsProductName">{objectPage.name}</h1>
                    <p className="detailsProductDesc">
                        {"- " + objectPage.details}
                    </p>
                    <h3 className="detailsProductState">
                        {objectPage.state
                            ? "Disponible"
                            : "No se encuentra disponible."}
                    </h3>
                    <h2 className="detailsProductPrice">
                        {objectPage.price ? "$ " + objectPage.price : ""}
                    </h2>
                    {objectPage != undefined ? (
                        <button
                            value={JSON.stringify(objectPage)}
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
