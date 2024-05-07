const APIProducts = import.meta.env.VITE_API_PRODUCTS;

/* GET */
export const getProducts = async () => {
    try {
        const response = await fetch(APIProducts);
        return response;
    } catch (error) {
        console.log(error);
    }
};
