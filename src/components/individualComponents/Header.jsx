import "../../css/cssComponents/mainHeader.css";
import { Link } from "react-router-dom";
import logo from "../../assets/bonsai.png";
import cart from "../../assets/cart.svg";
import user from "../../assets/user.svg";
import arrowDropDown from "../../assets/arrowDropDown.png";
import { HashLink } from "react-router-hash-link";
import { useState } from "react";

export const Header = () => {
    const [userSelect, setUserSelect] = useState("");
    const [headerScroll, setHeaderScroll] = useState("");
    const [headerHamb, setHeaderHamb] = useState("");

    window.onscroll = function () {
        setUserSelect("");
        window.scrollY > 0 ? setHeaderScroll(" white") : setHeaderScroll("");
    };
    const handleHamb = () => {
        setHeaderHamb(headerHamb == "" ? " active" : "");
    };

    return (
        <header className={"mainHeader" + headerScroll}>
            <HashLink className="headerLogoContainer" to={"/#home"}>
                <img src={logo} alt="" className="headerLogo" />
                <p className="headerName">Lotus Fusion</p>
            </HashLink>
            <nav className="headerNav">
                <HashLink className="headerNavLink" to={"/#home"}>
                    Inicio
                </HashLink>
                <HashLink className="headerNavLink" to={"/#mainMenu"}>
                    Productos
                </HashLink>
                <HashLink className="headerNavLink" to={"/#mainInfo"}>
                    Nosotros
                </HashLink>
                <Link className="headerNavCart" to={"/cart"}>
                    <img className="cart" src={cart}></img>
                </Link>
                <div className="headerNavUser">
                    <button
                        onClick={() =>
                            setUserSelect(userSelect == "" ? " active" : "")
                        }
                        className="headerUserSelect"
                    >
                        <img className="user" src={user} alt="" />
                        <img
                            className={"arrow " + userSelect}
                            src={arrowDropDown}
                            alt=""
                        />
                    </button>
                    <div className={"headerUserDropDown " + userSelect}>
                        <button>Mis pedidos</button>
                        <button>Cerrar sesión</button>
                    </div>
                </div>
            </nav>
            <button
                className={"headerHamb " + headerHamb}
                onClick={() => {
                    handleHamb();
                }}
            >
                <span className="bar"></span>
                <span className="bar"></span>
                <span className="bar"></span>
            </button>
            <nav className={"headerNavMobile" + headerHamb}>
                <HashLink
                    className="headerNavLink"
                    to={"/#home"}
                    onClick={() => {
                        handleHamb();
                    }}
                >
                    Inicio
                </HashLink>
                <HashLink
                    className="headerNavLink"
                    to={"/#mainMenu"}
                    onClick={() => {
                        handleHamb();
                    }}
                >
                    Productos
                </HashLink>
                <HashLink
                    className="headerNavLink"
                    to={"/#mainInfo"}
                    onClick={() => {
                        handleHamb();
                    }}
                >
                    Nosotros
                </HashLink>
                <Link
                    className="headerNavLink"
                    to={"/cart"}
                    onClick={() => {
                        handleHamb();
                    }}
                >
                    Carrito
                </Link>
                <Link
                    className="headerNavLink"
                    to={"/#home"}
                    onClick={() => {
                        handleHamb();
                    }}
                >
                    Mis pedidos
                </Link>
                <button
                    className="headerNavLink"
                    onClick={() => {
                        handleHamb();
                    }}
                >
                    Cerrar sesión
                </button>
            </nav>
        </header>
    );
};
