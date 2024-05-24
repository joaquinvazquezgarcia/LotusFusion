const inputProductValidation = (
    inputType,
    value,
    setErrorMsg,
    setValidatedValue
) => {
    if (inputType == "name") {
        if (value == undefined) {
            setErrorMsg("Este campo es obligatorio");
        } else if (value.length < 4) {
            setErrorMsg(
                "El nobre del producto debe poseer al menos 4 caracteres."
            );
        } else if (value.length > 50) {
            setErrorMsg(
                "El nobre del producto debe poseer como maximo 50 caracteres."
            );
        } else {
            setErrorMsg("");
            setValidatedValue(value.toUpperCase());
        }
    }
    if (inputType == "price") {
        const pattern = /^-?\d+\.?\d*$/;
        if (value == undefined || value.length == 0) {
            setErrorMsg("Este campo es obligatorio");
        } else if (!pattern.test(value)) {
            console.log(!pattern.test(value));
            setErrorMsg("El precio debe ser un numero.");
        } else if (value > 50000) {
            setErrorMsg("El precio máximo es de $50000");
        } else if (value < 100) {
            setErrorMsg("El precio mínimo es de $100");
        } else {
            setErrorMsg("");
            setValidatedValue(value);
        }
    }
    if (inputType == "details") {
        if (value == undefined || value.length == 0) {
            setErrorMsg("Este campo es obligatorio");
        } else if (value.length < 20) {
            setErrorMsg(
                "La descripción del producto debe poseer al menos 20 caracteres."
            );
        } else if (value.length > 250) {
            setErrorMsg(
                "La descripción del producto debe poseer hasta 250 caracteres."
            );
        } else {
            setErrorMsg("");
            setValidatedValue(
                value.charAt(0).toUpperCase() + value.toLowerCase().slice(1)
            );
        }
    }
    if (inputType == "url") {
        const urlR =
            /[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)/gi;

        if (value == undefined || value.length == 0) {
            setErrorMsg("Este campo es obligatorio");
        } else if (!value.match(urlR)) {
            setErrorMsg("Debe ingresar una URL válida.");
        } else {
            setErrorMsg("");
            setValidatedValue(value);
        }
    }
};

export default inputProductValidation;
