const setErrAndReturnFalse = (setErrMsg, msg) => {
    setErrMsg(msg);
    return false;
};

export const validateUserEmail = (value, setErrMsg) => {
    const pattern =
        /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (value.length < 1) {
        setErrAndReturnFalse(setErrMsg, "El email es un campo obligatorio.");
        return false;
    }
    if (!pattern.test(value)) {
        setErrAndReturnFalse(setErrMsg, "El email no tiene un formato válido.");
        return false;
    }
    if (value.length > 50) {
        setErrAndReturnFalse(
            setErrMsg,
            "El email no puede contener mas de 50 caracteres."
        );
        return false;
    }
    setErrMsg("");
    return true;
};

export const validateUserName = (value, setErrMsg) => {
    if (value.length < 1) {
        setErrAndReturnFalse(setErrMsg, "El nombre es un campo obligatorio.");
        return false;
    }
    if (value.length < 4) {
        setErrAndReturnFalse(
            setErrMsg,
            "El nombre debe poseer al menos 3 caracteres"
        );
        return false;
    }
    if (value.length > 50) {
        setErrAndReturnFalse(
            setErrMsg,
            "El nombre no puede contener mas de 50 caracteres."
        );
        return false;
    }
    setErrMsg("");
    return true;
};

export const validatePassword = (value, setErrMsg) => {
    if (value.length < 1) {
        setErrAndReturnFalse(
            setErrMsg,
            "La contraseña es un campo obligatorio."
        );
        return false;
    }
    if (value.length < 5) {
        setErrAndReturnFalse(
            setErrMsg,
            "La contraseña debe poseer al menos 5 caracteres"
        );
        return false;
    }
    if (value.length > 100) {
        setErrAndReturnFalse(
            setErrMsg,
            "La contraseña no puede contener mas de 100 caracteres."
        );
        return false;
    }
    setErrMsg("");
    return true;
};

export const validateRepeatPassword = (original, value, setErrMsg) => {
    if (value.length < 1) {
        setErrAndReturnFalse(
            setErrMsg,
            "Debe repetir su contraseña para poder continuar."
        );
        return false;
    }
    if (original !== value) {
        setErrAndReturnFalse(setErrMsg, "Las contraseñas no coinciden");
        return false;
    }
    setErrMsg("");
    return true;
};
