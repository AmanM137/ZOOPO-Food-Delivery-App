import { createContext, useEffect, useState } from 'react';

export const StoreContext = createContext(null)

const StoreContextProvider = (props) => {

    const url = "http://localhost:4000";
    const [token, setToken] = useState("");
    const [showLogin, setShowLogin] = useState(false);

    useEffect(() => {
        async function loadToken() {
            if (localStorage.getItem("token")) {
                setToken(localStorage.getItem("token"));
            }
            if (!token) {
                setShowLogin(false);
            }
            else {
                setShowLogin(true);
            }
        }
        loadToken();
    }, [])

    const contextValue = {
        url,
        token,
        setToken,
        showLogin,
        setShowLogin
    }

    return (
        <StoreContext.Provider value={contextValue}>
            {props.children}
        </StoreContext.Provider>
    )
}

export default StoreContextProvider;
