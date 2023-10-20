import { getAuth } from "firebase/auth";
import app from "../Firebase/firebase.config";
import { createContext } from "react";
const auth = getAuth(app);
export const AuthContext = createContext(null);
const AuthProvider = ({children}) => {
    const userInfo = {
        
    }
    return (
        <AuthContext.Provider value={userInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;