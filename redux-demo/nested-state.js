const redux = require('redux');
const createStore = redux.createStore;
const produce = require('immer').produce;

const initialState = {
    name: 'MR Masum',
    address: {
        street: '123 Main St',
        city: 'Dhaka',
        state: 'BD'
    }
}

const STREET_UPDATED = "STREET_UPDATED"
const updateStreet = (street) => {
    return {
        type: STREET_UPDATED,
        payload: street
    }
}

// use immer to update nested state
const reducer = (state = initialState, action) => {
    switch (action.type) {
        case STREET_UPDATED:
            // return {
            //     ...state,
            //     address: {
            //         ...state.address,
            //         street: action.payload
            //     }
            // }
            return produce(state, (draft) => {
                draft.address.street = action.payload
            })
        default:
            return state;
    }
}

const store = createStore(reducer);
console.log("Initial State", store.getState());
const unsubscribe = store.subscribe(() =>
    console.log("Updated State", store.getState())
);

store.dispatch(updateStreet('456 Main Street'));
unsubscribe();