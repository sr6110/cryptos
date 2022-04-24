import React, { createContext, useContext, useEffect, useState } from 'react';


const Crypto =  createContext()

const CryptoContext = ({children}) => {
    const[currency, setCurrency] = useState('INR');
    const[symbol, setSymbol] = useState('&#8377;');

    useEffect(()=>{
        if(currency === 'INR') setSymbol("₹");
        else if(currency ==="USD") setSymbol("$");
    }, [currency])

console.log(currency, symbol);
    return(
        <Crypto.Provider value={{currency, symbol, setCurrency}}>
            {children}
        </Crypto.Provider>
    )
}


export default CryptoContext;

export const CryptoState = () => {
    return useContext(Crypto);
}