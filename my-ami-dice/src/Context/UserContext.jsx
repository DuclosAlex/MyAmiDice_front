import { useState, useEffect, createContext } from "react";

export const UserContext = createContext({});

export const UserProvider = ({ children }) => {
    console.log("TEST POUR LA DECO : ",JSON.parse(localStorage.getItem("User")) )
    const initialValue = JSON.parse(localStorage.getItem("User"));

    const [user, setUser] = useState(initialValue);
    
    useEffect(() => {
        localStorage.setItem("User", JSON.stringify(user));
    }, [user]);

    return (
        <UserContext.Provider value={[ user, setUser ]}>
            {children}
        </UserContext.Provider>
    );
};