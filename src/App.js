import './App.css';
import React from 'react'
import Step from "./components/Step";
import Counter from "./components/Counter";

import {createStore} from "./slomux/createStore";
import {reducer} from "./slomux/reducer";

//  initial state
const defaultState = {
    counter: 1,
    stepSize: 2,
}


export const StoreContext = React.createContext()

function App() {

    const store = createStore(reducer, defaultState)

    return (
        <StoreContext.Provider value={store}>
            <div className="App">
                <Counter />
            </div>
        </StoreContext.Provider>
    )
}

export default App;
