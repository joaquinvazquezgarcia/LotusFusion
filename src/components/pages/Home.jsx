import "../../css/cssPages/home.css";
import { useState } from "react";
import homeBannerImg from "../../assets/homeBannerImg.jpg";
import homeAboutUsImg from "../../assets/homeAboutUsImg.png";
import polloAlCurry from "../../assets/polloAlCurry.png";
import padTailandes from "../../assets/padTailandes.png";
import polloYAnacardos from "../../assets/polloYAnacardos.png";
import { HashLink } from "react-router-hash-link";

/*-------------- Eliminar cuando se una el backend  --------------*/
/* La pagina de inicio debe recibir un array de productos y eso es todo lo necesario para que funcione */
const plato1 = {
    name: "POLLO AL CURRY ROJO",
    state: true,
    price: 5600,
    details: "Filete de Pollo salteado con curry rojo y arroz.",
    img: polloAlCurry,
};
const plato2 = {
    name: "PAD TAILANDES",
    state: true,
    price: 300,
    details: "Filete de Pollo salteado con curry rojo y arroz.",
    img: padTailandes,
};
const plato3 = {
    name: "POLLO Y ANACARDOS",
    state: true,
    price: 5000,
    details: "Filete de Pollo salteado con curry rojo y arroz.",
    img: polloYAnacardos,
};

/* Estos serían los productos que vendrian desde el back */
const productsArray = [
    plato1,
    plato2,
    plato3,
    plato2,
    plato1,
    plato1,
    plato3,
    plato2,
    plato1,
    plato3,
    plato3,
    plato2,
];
/* ------------------------------------------------------------ */

const MenuCard = ({ object, setObjectPage, handleCart }) => {
    return (
        <article className="menuCard">
            <HashLink
                to={"/details#detailsPage"}
                className="menuCardLink"
                onClick={() => {
                    setObjectPage(object);
                    localStorage.setItem("objectPage", JSON.stringify(object));
                }}
            >
                <figure>
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

const Home = ({ setObjectPage, handleCart }) => {
    const [menuState, setMenuState] = useState("");
    const handleMenu = () => {
        menuState == "" ? setMenuState("active") : setMenuState("");
    };

    let nextId = 0;
    return (
        <main>
            <section className="homeBanner">
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
                    <a className="homeMainBtn" href="#mainMenu">
                        Menú
                    </a>
                </div>
                <div className="homeBannerImgContainer">
                    <img src={homeBannerImg} alt="" className="homeBannerImg" />
                    <div className="homeBannerImgOverlay"></div>
                </div>
            </section>
            <section className="homeInfo">
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
                <div className="homeMenuCardContainer">
                    <MenuCard
                        object={productsArray[0]}
                        setObjectPage={setObjectPage}
                        handleCart={handleCart}
                    />
                    <MenuCard
                        object={productsArray[1]}
                        setObjectPage={setObjectPage}
                        handleCart={handleCart}
                    />
                    <MenuCard
                        object={productsArray[2]}
                        setObjectPage={setObjectPage}
                        handleCart={handleCart}
                    />
                </div>
                <button
                    className={
                        "homeMainBtn" + " " + "seeMoreMenuBtn" + " " + menuState
                    }
                    onClick={handleMenu}
                >
                    Ver el menú completo
                </button>
                <div
                    className={
                        "homeMenuCardContainer" +
                        " " +
                        "seeMore" +
                        " " +
                        menuState
                    }
                >
                    {productsArray.map(product => {
                        return (
                            <MenuCard
                                object={product}
                                key={nextId++}
                                setObjectPage={setObjectPage}
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
