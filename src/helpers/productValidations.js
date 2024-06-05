const setErrorAndReturnFalse = (setErrorMsg, msg) => {
    setErrorMsg(msg);
    return false;
};

export const validateProdName = (value, setErrorMsg) => {
    if (!value)
        return setErrorAndReturnFalse(setErrorMsg, "Este campo es obligatorio");
    if (value.length < 4)
        return setErrorAndReturnFalse(
            setErrorMsg,
            "El nombre del producto debe poseer al menos 4 caracteres."
        );
    if (value.length > 50)
        return setErrorAndReturnFalse(
            setErrorMsg,
            "El nombre del producto debe poseer como máximo 50 caracteres."
        );
    setErrorMsg("");
    return true;
};

export const validateProdPrice = (value, setErrorMsg) => {
    const pattern = /^-?\d+\.?\d*$/;
    if (!value)
        return setErrorAndReturnFalse(setErrorMsg, "Este campo es obligatorio");
    if (!pattern.test(value))
        return setErrorAndReturnFalse(
            setErrorMsg,
            "El precio debe ser un número."
        );
    if (value > 50000)
        return setErrorAndReturnFalse(
            setErrorMsg,
            "El precio máximo es de $50000"
        );
    if (value < 100)
        return setErrorAndReturnFalse(
            setErrorMsg,
            "El precio mínimo es de $100"
        );
    setErrorMsg("");
    return true;
};

export const validateProdDesc = (value, setErrorMsg) => {
    if (!value)
        return setErrorAndReturnFalse(setErrorMsg, "Este campo es obligatorio");
    if (value.length < 20)
        return setErrorAndReturnFalse(
            setErrorMsg,
            "La descripción del producto debe poseer al menos 20 caracteres."
        );
    if (value.length > 250)
        return setErrorAndReturnFalse(
            setErrorMsg,
            "La descripción del producto debe poseer hasta 250 caracteres."
        );
    setErrorMsg("");
    return true;
};

export const validateProdUrl = (value, setErrorMsg) => {
    const urlR =
        /[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)/gi;
    if (!value)
        return setErrorAndReturnFalse(setErrorMsg, "Este campo es obligatorio");
    if (!urlR.test(value))
        return setErrorAndReturnFalse(
            setErrorMsg,
            "Debe ingresar una URL válida."
        );
    setErrorMsg("");
    return true;
};

export const validateProdStock = (value, setErrorMsg) => {
    if (value == undefined)
        return setErrorAndReturnFalse(setErrorMsg, "Este campo es obligatorio");
    if (value != false && value != true)
        return setErrorAndReturnFalse(
            setErrorMsg,
            "El estado del producto es incorrecto, por favor recargue la página."
        );
    setErrorMsg("");
    return true;
};
