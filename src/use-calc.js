import { useReducer } from "react";
import { OPERATIONS } from './operations-type';

const ACTIONS = {
    CHANGE_N1: 'n1',
    CHANGE_N2: 'n2',
    CHANGE_OPERATION: 'operation',
}

const calculateResult = (state) => {
    switch (state.operation) {
        case OPERATIONS.SUM:
            return state.n1 + state.n2;
        case OPERATIONS.SUBTRACT:
            return state.n1 - state.n2;
        default: return 0;
    }
}


const reducer = (state, action) => {
    let newState;
    switch (action.type) {
        case ACTIONS.CHANGE_N1:
            newState = { ...state, n1: parseFloat(action.value) };
            return { ...newState, result: calculateResult(newState) };
        case ACTIONS.CHANGE_N2:
            newState = { ...state, n2: parseFloat(action.value) };
            return { ...newState, result: calculateResult(newState) };
        case ACTIONS.CHANGE_OPERATION:
            newState = { ...state, operation: action.value };
            return { ...newState, result: calculateResult(newState) };
        default: return state;
    }
}

const useCalc = () => {
    const initialState = {
        n1: 0,
        n2: 0,
        operation: OPERATIONS.SUM,
        result: 0,
    };

    const [state, dispatch] = useReducer(reducer, initialState);


    return {
        ...state,
        changeN1: (value) => dispatch({ type: ACTIONS.CHANGE_N1, value }),
        changeN2: (value) => dispatch({ type: ACTIONS.CHANGE_N2, value }),
        changeOperation: (value) => dispatch({ type: ACTIONS.CHANGE_OPERATION, value })

    };
}

export default useCalc;