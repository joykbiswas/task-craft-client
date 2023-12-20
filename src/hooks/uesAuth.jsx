import { useContext } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";

const uesAuth = () => {
    const auth = useContext(AuthContext);
    return auth;
};

export default uesAuth;