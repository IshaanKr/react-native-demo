import { INCREMENT_COUNTER, DECREMENT_COUNTER } from "./actionType";


const initialState = {
    counter: 0
}

export const mainReducer = (state = initialState, action) => {
    switch (action.type) {
        case INCREMENT_COUNTER:
            return { ...state, counter: state.counter + 1 }
        case DECREMENT_COUNTER:
            return { ...state, counter: state.counter - 1 }
        default:
            return state
    }
}