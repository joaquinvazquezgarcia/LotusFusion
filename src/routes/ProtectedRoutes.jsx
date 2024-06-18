export const ProtectedRoutes = ({ children }) => {
    const admin = JSON.parse(sessionStorage.getItem("admin"));
    if (!admin) {
        return <Navigate to={"/"}></Navigate>;
    } else return children;
};
