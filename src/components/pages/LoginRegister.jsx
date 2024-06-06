import "../../css/cssPages/loginRegister.css";
import loginImg from "../../assets/loginImg.jpg";
import { useState } from "react";
import {
    validatePassword,
    validateRepeatPassword,
    validateUserEmail,
    validateUserName,
} from "../../helpers/userValidations.js";

const LoginRegister = ({ registering, setRegistering }) => {
    const [email, setEmail] = useState("");
    const [name, setName] = useState("");
    const [password, setPassword] = useState("");
    const [emailErrMsg, setEmailErrMsg] = useState("");
    const [nameErrMsg, setNameErrMsg] = useState("");
    const [passwordErrMsg, setPasswordErrMsg] = useState("");
    const [repPasswordErrMsg, setRepPasswordErrMsg] = useState("");

    const handleRegistering = () => {
        registering ? setRegistering(false) : setRegistering(true);
    };

    const handleRegistration = e => {
        e.preventDefault();
        if (
            validateUserEmail(email, setEmailErrMsg) &&
            validateUserName(name, setNameErrMsg) &&
            validatePassword(password, setPasswordErrMsg)
        ) {
            console.log(email);
        }
    };

    return (
        <main className="pagLogin" id="loginPage">
            <section className="loginFormSection">
                <div className="loginFormContainer">
                    <h1 className="loginPageTitle">
                        {registering
                            ? "¡Crea una cuenta para realizar un pedido!"
                            : "Inicia sesión para realizar un pedido!"}
                    </h1>
                    {registering ? (
                        <form action="register">
                            <label htmlFor="registerEmail">Email</label>
                            <input
                                id="registerEmail"
                                type="text"
                                placeholder="lotusfusion@example.com"
                                onChange={e => {
                                    validateUserEmail(
                                        e.target.value,
                                        setEmailErrMsg
                                    );
                                    setEmail(e.target.value);
                                }}
                            />
                            <p className="productInputAlert">{emailErrMsg}</p>
                            <label htmlFor="registerName">
                                Nombre completo
                            </label>
                            <input
                                id="registerName"
                                type="text"
                                placeholder="Javier Aguirre"
                                onChange={e => {
                                    validateUserName(
                                        e.target.value,
                                        setNameErrMsg
                                    );
                                    setName(e.target.value);
                                }}
                            />
                            <p className="productInputAlert">{nameErrMsg}</p>
                            <label htmlFor="registerPass">Contraseña</label>
                            <input
                                id="registerPass"
                                type="password"
                                placeholder="Contraseña"
                                onChange={e => {
                                    validatePassword(
                                        e.target.value,
                                        setPasswordErrMsg
                                    );
                                    setPassword(e.target.value);
                                }}
                            />
                            <p className="productInputAlert">
                                {passwordErrMsg}
                            </p>
                            <label htmlFor="registerRePass">
                                Repita su contraseña
                            </label>
                            <input
                                id="registerRePass"
                                type="password"
                                placeholder="Contraseña"
                                onChange={e => {
                                    validateRepeatPassword(
                                        password,
                                        e.target.value,
                                        setRepPasswordErrMsg
                                    );
                                }}
                            />
                            <p className="productInputAlert">
                                {repPasswordErrMsg}
                            </p>
                            <button
                                onClick={e => handleRegistration(e)}
                                className="loginSubmitBtn"
                                type="submit"
                            >
                                Crear Cuenta
                            </button>
                        </form>
                    ) : (
                        <form action="login">
                            <label htmlFor="loginEmail">Email</label>
                            <input
                                id="loginEmail"
                                type="text"
                                placeholder="lotusfusion@example.com"
                            />
                            <label htmlFor="loginPass">Contraseña</label>
                            <input
                                id="loginPass"
                                type="password"
                                placeholder="Contraseña"
                            />
                            <button className="loginSubmitBtn" type="submit">
                                Iniciar sesión
                            </button>
                        </form>
                    )}

                    <button
                        onClick={handleRegistering}
                        className="loginSwapBtn"
                    >
                        {registering
                            ? "Ya tienes una cuenta? Click aquí para iniciar sesión."
                            : "No tienes una cuenta? Click aquí para crear una."}
                    </button>
                </div>
                <img src={loginImg} alt="#" className="loginImg" />
            </section>
        </main>
    );
};
export default LoginRegister;
