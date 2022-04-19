import { useReducer } from "react";

const ActionTypes = {
    SUM: '+',
    SUBTRACT: '-',
}

const reducer = (state, action) => {
    switch (action.type) {
        case ActionTypes.SUM:
            return { ...state, result: parseFloat(action.value.n1) + parseFloat(action.value.n2) };
        case ActionTypes.SUBTRACT:
            return { ...state, result: parseFloat(action.value.n1) - parseFloat(action.value.n2) };
        default: return state;
    }
}

const useCalc = () => {
    const initialState = {
        'result': 0,
    };

    const [{ result }, dispatch] = useReducer(reducer, initialState);


    return {
        result,
        sum: (n1, n2) => dispatch({ type: ActionTypes.SUM, value: { n1, n2 } }),
        subtract: (n1, n2) => dispatch({ type: ActionTypes.SUBTRACT, value: { n1, n2 } })
    };
}

export default useCalc;