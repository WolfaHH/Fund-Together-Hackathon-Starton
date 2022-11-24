import React, { useReducer, createContext } from 'react';

export const initialAppDataState = {
    accounts: {}, // [] ?,
    userStatus: 'connect to retrieve',
    userAddress: 'connect to retrieve',
    userTokens: 'connect to retrieve',
    userBalance: 'connect to retrieve',
}

export const AppDataStoreContext = createContext(initialAppDataState);

export function reducer(state, action) {
    switch (action.type) {
        case 'setAppData':
            return {
                ...state,
                accounts: action.userAccounts,
                userStatus: action.userStatus,
                userAddress: action.userAddress,
                userTokens: action.userTokens,
                userBalance: action.userBalance,

            };

        default:
            throw new Error();
    }
}

export const AppDataStoreContainer = ({ children }) => {
    const [stateAppData, dispatchAppData] = useReducer(reducer, initialAppDataState);

    return (
        <AppDataStoreContext.Provider value={{ stateAppData, dispatchAppData }}>
            {children}
        </AppDataStoreContext.Provider>
    )
}

