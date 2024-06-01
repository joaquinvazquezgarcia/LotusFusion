const APIProducts = import.meta.env.VITE_API_PRODUCTS;
const APIUsers = import.meta.env.VITE_API_USERS;
const APIOrders = import.meta.env.VITE_API_ORDERS;

/* --------------- GET ALL PRODUCTS --------------- */
export const getProducts = async () => {
    try {
        const response = await fetch(APIProducts);
        return response;
    } catch (error) {
        console.log(error);
    }
};

/* --------------- GET SINGLE PRODUCT BY ID --------------- */
export const getProduct = async id => {
    try {
        const response = await fetch(APIProducts + "/" + id);
        return response;
    } catch (error) {
        console.log(error);
    }
};
/* --------------- POST SINGLE PRODUCT --------------- */
export const newProduct = async newProduct => {
    try {
        const response = await fetch(APIProducts, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(newProduct),
        });
        return response;
    } catch (error) {
        console.log(error);
    }
};

/* --------------- GET ALL USERS ---------------*/
export const getUsers = async () => {
    try {
        const response = await fetch(APIUsers);
        return response;
    } catch (error) {
        console.log(error);
    }
};

/* --------------- GET ALL ORDERS --------------- */
export const getOrders = async () => {
    try {
        const response = await fetch(APIOrders);
        return response;
    } catch (error) {
        console.log(error);
    }
};
