export function createStore(reducer, initialState){
    let state = reducer(initialState, {type: '__INIT__'})
    const listeners = {}

    return {
        dispatch(name, action){
            state = reducer(state, action)
            if(listeners[name]){
                listeners[name].forEach(listener => listener())
            }
        },
        subscribe(callback, name){
            if(!listeners[name]){
                listeners[name] = []
                listeners[name].push(callback)
            }
            return
        },
        getState(){
            return state
        },
        getSubscribers(){
            return listeners
        }
    }
}