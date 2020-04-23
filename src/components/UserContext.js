import React, { useState } from 'react';

export const UserContext = React.createContext();

export const UserProvider = ({children}) => {
    const [name, setName] = useState("");
    const [firstname, setFirstname] = useState("");
    const [homme, setHomme] = useState("Monsieur");
    const [femme, setFemme] = useState("Madame");

    return (
        <UserContext.Provider
        value={{
            name,
            firstname,
            homme,
            femme,
            setName,
            setFirstname,
            setHomme,
            setFemme
        }}
        >
            {children}
        </UserContext.Provider>
    );
};
