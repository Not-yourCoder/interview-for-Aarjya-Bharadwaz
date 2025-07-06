/* eslint-disable react-refresh/only-export-components */
import type { LaunchFilter } from "@/types/filters";
import React, { createContext, useContext, useReducer, type ReactNode } from "react";

interface State {
    selectedFilter: LaunchFilter;
}

type Action = { type: "SET_FILTER"; payload: LaunchFilter };

const initialState: State = {
    selectedFilter: "all",
};

function reducer(state: State, action: Action): State {
    switch (action.type) {
        case "SET_FILTER":
            return { ...state, selectedFilter: action.payload };
        default:
            return state;
    }
}

const LaunchFilterContext = createContext<{
    state: State;
    dispatch: React.Dispatch<Action>;
} | null>(null);

export const LaunchFilterProvider = ({ children }: { children: ReactNode }) => {
    const [state, dispatch] = useReducer(reducer, initialState);
    return (
        <LaunchFilterContext.Provider value={{ state, dispatch }}>
            {children}
        </LaunchFilterContext.Provider>
    );
};

export const useLaunchFilter = () => {
    const context = useContext(LaunchFilterContext);
    if (!context) {
        throw new Error("useLaunchFilter must be used within a LaunchFilterProvider");
    }
    return context;
};
