export const validateProdName = (value, setErrorMsg) => {
    if (value == undefined || value.length == 0) {
        setErrorMsg("Este campo es obligatorio");
        return false;
    } else if (value.length < 4) {
        setErrorMsg("El nobre del producto debe poseer al menos 4 caracteres.");
        return false;
    } else if (value.length > 50) {
        setErrorMsg(
            "El nobre del producto debe poseer como maximo 50 caracteres."
        );
        return false;
    } else {
        setErrorMsg("");
        return true;
    }
};
export const validateProdPrice = (value, setErrorMsg) => {
    const pattern = /^-?\d+\.?\d*$/;
    if (value == undefined || value.length == 0) {
        setErrorMsg("Este campo es obligatorio");
        return false;
    } else if (!pattern.test(value)) {
        console.log(!pattern.test(value));
        setErrorMsg("El precio debe ser un numero.");
        return false;
    } else if (value > 50000) {
        setErrorMsg("El precio máximo es de $50000");
        return false;
    } else if (value < 100) {
        setErrorMsg("El precio mínimo es de $100");
        return false;
    } else {
        setErrorMsg("");
        return true;
    }
};
export const validateProdDesc = (value, setErrorMsg) => {
    if (value == undefined || value.length == 0) {
        setErrorMsg("Este campo es obligatorio");
        return false;
    } else if (value.length < 20) {
        setErrorMsg(
            "La descripción del producto debe poseer al menos 20 caracteres."
        );
        return false;
    } else if (value.length > 250) {
        setErrorMsg(
            "La descripción del producto debe poseer hasta 250 caracteres."
        );
        return false;
    } else {
        setErrorMsg("");
        return true;
        /* Transformar primera a mayusculas y el resto a minusculas */
        /* value.charAt(0).toUpperCase() + value.toLowerCase().slice(1) */
    }
};
export const validateProdUrl = (value, setErrorMsg) => {
    const urlR =
        /[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)/gi;

    if (value == undefined || value.length == 0) {
        setErrorMsg("Este campo es obligatorio");
        return false;
    } else if (!value.match(urlR)) {
        setErrorMsg("Debe ingresar una URL válida.");
        return false;
    } else {
        setErrorMsg("");
        return true;
    }
};
