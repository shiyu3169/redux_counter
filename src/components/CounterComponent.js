import React from 'react'
export const CounterComponent = ({count, increment, decrement}) => 
    <div>
        <h2>Counter</h2>
        count: {count}
        <br/>
        <button onClick={decrement}>Decrement</button>
        <button onClick={increment}>Increment</button>
    </div>