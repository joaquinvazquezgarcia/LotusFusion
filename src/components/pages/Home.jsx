import "../../css/cssPages/home.css";
import { useEffect, useState } from "react";
import homeBannerImg from "../../assets/homeBannerImg.jpg";
import homeAboutUsImg from "../../assets/homeAboutUsImg.png";
import { HashLink } from "react-router-hash-link";
import { getProducts } from "../../helpers/queries.js";

const MenuCard = ({ object, handleCart }) => {
    return (
        <article className="menuCard">
            <HashLink
                to={"/details/" + object.id + "/#detailsPage"}
                className="menuCardLink"
            >
                <figure className="menuCardFigure">
                    <img
                        className="menuCardImg"
                        src={object.img}
                        alt={object.name}
                    />
                    <figcaption className="menuCardTitle">
                        {object.name}
                    </figcaption>
                    <p className="menuCardDescription">{object.details}</p>
                </figure>
            </HashLink>
            <button
                value={JSON.stringify(object)}
                className="menuCardBtn"
                onClick={e => {
                    handleCart(e);
                }}
            >
                Agregar al Carrito
            </button>
        </article>
    );
};

const Home = ({ handleCart }) => {
    /* Opening menu of products */
    const [menuState, setMenuState] = useState("");
    const handleMenu = () => {
        menuState == "" ? setMenuState("active") : setMenuState("");
    };

    //Obtain product's array on Mounting stage from API
    const [productsArray, setProductsArray] = useState([]);
    useEffect(() => {
        obtainPoducts();
    }, []);
    const obtainPoducts = async () => {
        const response = await getProducts();
        if (response.status === 200) {
            const data = await response.json();
            setProductsArray(data);
        } else {
            //Show a nice error alert to client
        }
    };

    return (
        <main>
            <section className="homeBanner" id="home">
                <div className="homeBannerTextContainer">
                    <h1 className="homeBannerTitle">
                        BIENVENIDOS A <br />
                        LOTUS FUSION
                    </h1>
                    <h2 className="homeBannerSubtitle">
                        DONDE SE ENCUENTRAN <br />
                        LA COMIDA RAPIDA <br />Y LA BUENA COMIDA
                    </h2>
                    <p className="homeBannerParagraph">
                        Aquí encontrarás lo mejor de Asia combinado en una
                        fantásticaFusión Asiática. Bienvenido y deje que
                        nuestros felices empleadoslo lleven a un maravilloso
                        viaje de sabor por Asia en un ambiente agradable y
                        relajado.
                    </p>
                    <HashLink smooth to="/#mainMenu" className="homeMainBtn">
                        Menú
                    </HashLink>
                </div>
                <div className="homeBannerImgContainer">
                    <img src={homeBannerImg} alt="" className="homeBannerImg" />
                    <div className="homeBannerImgOverlay"></div>
                </div>
            </section>
            <section className="homeInfo" id="mainInfo">
                <div className="homeInfoImgContainer">
                    <img src={homeAboutUsImg} alt="" className="homeInfoImg" />
                </div>
                <div className="homeInfoTextContainer">
                    <h3 className="homeMainHeader">Sabor y calor de Asia</h3>
                    <h2 className="homeMainTitle">
                        BIENVENIDOS A <br />
                        LOTUS FUSION
                    </h2>
                    <p className="homeInfoParagraph">
                        Lotus Fusion es una cadena de restaurantes asiáticos
                        donde la comida y las recetas son una combinación de
                        diferentes partes de Asia, creando un concepto de fusión
                        asiática.
                        <br /> Lotus Fusion comenzó como un sencillo restaurante
                        de comida rápida, comida rápida tailandesa, en un
                        pequeño local en la ciudad de Tucumán en 2007. Desde
                        entonces, tanto el restaurante como el concepto se han
                        convertido en un restaurante de alta cocina con altos
                        estándares y buena reputación.
                        <br />
                        <br /> Con el increíble servicio, los derechos de
                        alcohol, la comida que siempre contiene ingredientes
                        frescos y se cocina directamente a pedido pero aún así
                        se entrega rápidamente a los clientes, así como el
                        interior único y hogareño, esto rápidamente se convirtió
                        en un concepto popular y ganador que estableció a Lotus
                        Fusion. aparte de las otras cadenas asiáticas de comida
                        rápida y los restaurantes.
                        <br /> Pero también al crear un ambiente relajado para
                        que nuestros clientes disfruten de estas comidas en el
                        que puedan sentirse seguros y bienvenidos, así como el
                        cuidado y el amor que se pone en preparar a nuestros
                        clientes comidas irresistibles y deliciosas, logramos
                        aprovechar esta oportunidad de ganar y retener a todos
                        nuestros clientes.
                        <br />
                        <br /> Para nosotros en Lotus Fusion la experiencia y el
                        bienestar del cliente es lo más importante ya que
                        gracias a nuestros clientes el restaurante se mantiene
                        firme, son ellos quienes SON la facturación que hace
                        avanzar a Lotus Fusion. Por eso, es especialmente
                        importante que siempre les mostremos por qué deberían
                        elegir Lotus Fusion frente a cualquier otro restaurante.
                    </p>
                </div>
            </section>
            <section className="homeMenu" id="mainMenu">
                <h3 className="homeMainHeader">Nuestro menú</h3>
                <h2 className="homeMainTitle">PLATOS POPULARES</h2>
                {productsArray.length < 3 ? (
                    "Desafortunadamente no se puede mostrar el menú en este momento, por favor intente recargar la página, o regrese mas tarde."
                ) : (
                    <>
                        <div
                            className={
                                "homeMenuCardContainer favorites" +
                                " " +
                                menuState
                            }
                        >
                            {" "}
                            <MenuCard
                                object={productsArray[0]}
                                handleCart={handleCart}
                            />
                            <MenuCard
                                object={productsArray[1]}
                                handleCart={handleCart}
                            />
                            <MenuCard
                                object={productsArray[2]}
                                handleCart={handleCart}
                            />
                        </div>
                        <button
                            className={
                                "homeMainBtn" +
                                " " +
                                "seeMoreMenuBtn" +
                                " " +
                                menuState
                            }
                            onClick={handleMenu}
                        >
                            Ver el menú completo
                        </button>
                    </>
                )}
                <div
                    className={
                        "homeMenuCardContainer seeMore " + " " + menuState
                    }
                >
                    {productsArray.map(product => {
                        return (
                            <MenuCard
                                object={product}
                                key={product.id}
                                handleCart={handleCart}
                            />
                        );
                    })}
                </div>
            </section>
        </main>
    );
};

export default Home;
