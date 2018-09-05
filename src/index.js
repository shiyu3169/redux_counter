import React from 'react'
import ReactDOM from 'react-dom'
import { createStore } from 'redux'
import { Provider, connect } from 'react-redux'
const CounterComponent = ({count, increment, decrement}) => 
    <div>
        <h2>Counter</h2>
        count: {count}
        <br/>
        <button onClick={decrement}>Decrement</button>
        <button onClick={increment}>Increment</button>
    </div>

const stateToPropertyMapper = state => ({
    count: state.count 
})

const CounterContainer =  connect(stateToPropertyMapper)(CounterComponent)

let initialState = {
    count: 234
}

const reducer = (state = initialState) => {
    return state
}

let store = createStore(reducer)

ReactDOM.render(
    <Provider store={store}>
        <CounterContainer/>
    </Provider>
    ,document.getElementById('root')
)