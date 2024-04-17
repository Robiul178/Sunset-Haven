import { useContext } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";


const PrivateRoute = ({ children }) => {
    const { user, setReload } = useContext(AuthContext);
    const location = useLocation();

    if (!user) {
        return <Navigate to='/login' state={location.pathname} />
    }


    return (
        <div>
            {children}
        </div>
    );
};

export default PrivateRoute;