const redux = require("redux");

const reducerFunction = (state = { counter: 0 }, action) => {
  console.log(state);
    if(action.type === "add"){
        return {
            counter: state.counter + 1
        }
    }
    if(action.type === "sub"){
        return {
            counter: state.counter - 1
        }
    }

};

const store = redux.createStore(reducerFunction);

const counterSubscriber = () => {

    const latestState =  store.getState();

    console.log(latestState);
}

store.subscribe(counterSubscriber);

store.dispatch({type: "add"});

