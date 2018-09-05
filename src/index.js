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

const dispatcherToPropertyMapper = dispatch => ({
    increment: () => dispatch({type:'INCREMENT', step: 10}),
    decrement: () => dispatch({type:'DECREMENT', step: 20})
})

const stateToPropertyMapper = state => ({
    count: state.count 
})

const CounterContainer =  connect(stateToPropertyMapper, dispatcherToPropertyMapper)(CounterComponent)

let initialState = {
    count: 234
}

const reducer = (state = initialState, action) => {
    switch(action.type) {
        case 'INCREMENT':
            return {
                count: state.count + action.step
             }
        case 'DECREMENT': 
            return {
                count: state.count - action.step
            }
        default:
            return state
    }
}

let store = createStore(reducer)

ReactDOM.render(
    <Provider store={store}>
        <CounterContainer/>
    </Provider>
    ,document.getElementById('root')
)