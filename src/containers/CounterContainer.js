import { connect    } from 'react-redux'
import { CounterComponent } from '../components/CounterComponent'

const dispatcherToPropertyMapper = dispatch => ({
    increment: () => dispatch({type:'INCREMENT', step: 10}),
    decrement: () => dispatch({type:'DECREMENT', step: 20})
})

const stateToPropertyMapper = state => ({
    count: state.count 
})

const CounterContainer =  connect(stateToPropertyMapper, dispatcherToPropertyMapper)(CounterComponent)

export default CounterContainer