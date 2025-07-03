import { dateRanges } from "@/constants/filters";
import type { DateRange } from "@/types/filters";
import { calculateDateRange } from "@/utils/helpers";
import React, { createContext, useReducer, useContext, type ReactNode } from "react";


interface State {
  dateRange: DateRange;
}

type Action = { type: "SET_DATE_RANGE"; payload: DateRange };

interface DateRangeFilterContextType {
  state: State;
  dispatch: React.Dispatch<Action>;
}

const initialState: State = {
  dateRange: calculateDateRange(dateRanges[0]),
};

function reducer(state: State, action: Action): State {
  switch (action.type) {
    case "SET_DATE_RANGE":
      return { ...state, dateRange: action.payload };
    default:
      return state;
  }
}

const DateRangeFilterContext = createContext<DateRangeFilterContextType>({
  state: initialState,
  dispatch: () => null,
});

export const DateRangeFilterProvider = ({
  children,
}: {
  children: ReactNode;
}) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <DateRangeFilterContext.Provider value={{ state, dispatch }}>
      {children}
    </DateRangeFilterContext.Provider>
  );
};

export const useDateRangeFilter = () => useContext(DateRangeFilterContext);
