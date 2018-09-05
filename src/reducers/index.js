let initialState = {
    count: 234
}

export const reducer = (state = initialState, action) => {
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