// actions
const UPDATE_COUNTER = 'UPDATE_COUNTER'
const CHANGE_STEP_SIZE = 'CHANGE_STEP_SIZE'

export function reducer(state, action){
    switch (action.type){
        case UPDATE_COUNTER:

            state.counter += action.payload
            console.log('click', state.counter)
            break
        case CHANGE_STEP_SIZE:
            state.stepSize = action.payload
            console.log('click', state.stepSize)
            break
        default:
            {}
    }

    return state
}