import { createContext, useState, useEffect, useContext } from "react";

const Crypto = createContext();

const CryptoContext = ({ children }) => {
    const [currency, setCurrency] = useState("EUR");
    const [symbol, setSymbol] = useState("€");
    // const [user, setUser] = useState(null);
    const [alert, setAlert] = useState({
        open: false,
        message: "",
        type: "success",
    });

    useEffect(() => {
        if (currency === "EUR") setSymbol("€");
        else if (currency === "USD") setSymbol("$");
    }, [currency]);

    return (
        <Crypto.Provider
            value={{ currency, symbol, setCurrency, alert, setAlert }}
        >
            {children}
        </Crypto.Provider>
    );
};

export default CryptoContext;

export const CryptoState = () => {
    return useContext(Crypto);
};
