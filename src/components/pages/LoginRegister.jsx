import "../../css/cssPages/loginRegister.css";
import loginImg from "../../assets/loginImg.jpg";

const LoginRegister = ({ registering, setRegistering }) => {
    const handleRegistering = () => {
        registering ? setRegistering(false) : setRegistering(true);
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
                            />
                            <label htmlFor="registerName">
                                Nombre completo
                            </label>
                            <input
                                id="registerName"
                                type="text"
                                placeholder="Javier Aguirre"
                            />
                            <label htmlFor="registerPass">Contraseña</label>
                            <input
                                id="registerPass"
                                type="password"
                                placeholder="Contraseña"
                            />
                            <label htmlFor="registerRePass">
                                Repita su contraseña
                            </label>
                            <input
                                id="registerRePass"
                                type="password"
                                placeholder="Contraseña"
                            />
                            <button className="loginSubmitBtn" type="submit">
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
