import { useContext } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";
import PropTypes from 'prop-types';

const PrivetRoute = ({children}) => {
    const {user,loading}=useContext(AuthContext);
    const location = useLocation();

    if(loading){
        return <div className="flex justify-center h-screen"><span className="loading loading-spinner loading-lg"></span></div>
    }
    if(user){
        return children;
    }
    return <Navigate state={location} to={'/userForm/'}></Navigate>
};
PrivetRoute.propTypes = {
    children: PropTypes.node
}
export default PrivetRoute;