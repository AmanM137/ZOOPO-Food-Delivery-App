import { createContext, useEffect, useState } from 'react';

export const StoreContext = createContext(null)

const StoreContextProvider = (props) => {

    const url = "https://zoopo-server.onrender.com";
    const [token, setToken] = useState("");
    const [showLogin, setShowLogin] = useState(false);

    useEffect(() => {
        async function loadToken() {
            if (localStorage.getItem("token")) {
                setToken(localStorage.getItem("token"));
            }
            if (!token) {
                setShowLogin(true);
            }
            else {
                setShowLogin(false);
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
