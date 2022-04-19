import { useEffect, useReducer } from "react";

const ActionTypes = {
    SUM: '+',
    SUBTRACT: '-',
}

const reducer = (state, action) => {
    switch (action.type) {
        case ActionTypes.SUM:
            return { ...state, result: state.n1 + state.n2 };
        case ActionTypes.SUBTRACT:
            return { ...state, result: state.n1 - state.n2 };
        default: return state;
    }
}

const useCalc = (n1, n2, operationType) => {
    const initialState = {
        'n1': n1,
        'n2': n2,
        'operation': operationType,
        'result': 0,
    };

    const [result, dispatch] = useReducer(reducer, initialState);

    useEffect(() => {
        dispatch({ type: operationType });
    }, [n1, n2, operationType]);

    return result;

}

export default useCalc;