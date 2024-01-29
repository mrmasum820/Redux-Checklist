const redux = require("redux");
const createStore = redux.createStore;
const applyMiddleware = redux.applyMiddleware;
const bindActionCreators = redux.bindActionCreators;
const combineReducers = redux.combineReducers;
const reduxLogger = require("redux-logger");

const logger = reduxLogger.createLogger();

// action type
const CAKE_ORDERED = "CAKE_ORDERED";
const CAKE_RESTOCKED = "CAKE_RESTOCKED";
const ICECREAM_ORDERED = "ICECREAM_ORDERED";
const ICECREAM_RESTOCKED = "ICECREAM_RESTOCKED";

// action creator
function orderCake() {
  return {
    type: CAKE_ORDERED,
    payload: 1,
  };
}

function restokeCake(qty = 1) {
  return {
    type: CAKE_RESTOCKED,
    payload: qty,
  };
}

function orderIcecream(qty = 1) {
  return {
    type: ICECREAM_ORDERED,
    payload: qty,
  };
}

function restockIcrecream(qty = 1) {
  return {
    type: ICECREAM_RESTOCKED,
    payload: qty,
  };
}

// reducer
// const initialState = {
//     numOfCakes: 10,
//     numOfIcecreams: 20
// }

const initialCakeState = {
  numOfCakes: 10,
};

const initialIcrecreamState = {
  numOfIcecreams: 20,
};

// reducer(previousState, action) => newState

// const reducer = (state = initialState, action) => {
//     switch (action.type) {
//         case CAKE_ORDERED:
//             return {
//                 ...state,
//                 numOfCakes: state.numOfCakes - 1
//             }
//         case CAKE_RESTOCKED:
//             return {
//                 ...state,
//                 numOfCakes: state.numOfCakes + action.payload
//             }
//             case ICECREAM_ORDERED:
//                 return {
//                     ...state,
//                     numOfIcecreams: state.numOfIcecreams - 1
//                 }
//             case ICECREAM_RESTOCKED:
//                 return {
//                     ...state,
//                     numOfIcecreams: state.numOfIcecreams + action.payload
//                 }
//         default:
//             return state;
//     }
// }

// multiple reducer
const cakeReducer = (state = initialCakeState, action) => {
  switch (action.type) {
    case CAKE_ORDERED:
      return {
        ...state,
        numOfCakes: state.numOfCakes - 1,
      };
    case CAKE_RESTOCKED:
      return {
        ...state,
        numOfCakes: state.numOfCakes + action.payload,
      };
    default:
      return state;
  }
};

const iceCreamReducer = (state = initialIcrecreamState, action) => {
  switch (action.type) {
    case ICECREAM_ORDERED:
      return {
        ...state,
        numOfIcecreams: state.numOfIcecreams - 1,
      };
    case ICECREAM_RESTOCKED:
      return {
        ...state,
        numOfIcecreams: state.numOfIcecreams + action.payload,
      };
    case CAKE_ORDERED:
      return {
        ...state,
        numOfIcecreams: state.numOfIcecreams - 1,
      };
    default:
      return state;
  }
};

// combine reducer
const rootReducer = combineReducers({
  cake: cakeReducer,
  iceCream: iceCreamReducer,
});

// store
const store = createStore(rootReducer, applyMiddleware(logger));
console.log("Initial state", store.getState());

// subscribe
const unsubscribe = store.subscribe(() => {});

// store.dispatch(orderCake())
// store.dispatch(orderCake())
// store.dispatch(orderCake())
// store.dispatch(restokeCake(3))

// bind action creator
const actions = bindActionCreators(
  { orderCake, restokeCake, orderIcecream, restockIcrecream },
  store.dispatch
);
actions.orderCake();
actions.orderCake();
actions.orderCake();
actions.restokeCake(3);
actions.orderIcecream();
actions.orderIcecream();
actions.restockIcrecream(2);

unsubscribe();
