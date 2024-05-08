const APIProducts = import.meta.env.VITE_API_PRODUCTS;

/* GET ALL PRODUCTS */
export const getProducts = async () => {
    try {
        const response = await fetch(APIProducts);
        return response;
    } catch (error) {
        console.log(error);
    }
};

/* GET SINGLE PRODUCT BY ID */
export const getProduct = async id => {
    try {
        const response = await fetch(APIProducts + "/" + id);
        return response;
    } catch (error) {
        console.log(error);
    }
};
