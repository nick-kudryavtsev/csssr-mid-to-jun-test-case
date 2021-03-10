import React, {useContext, useRef} from 'react'
import {StoreContext} from "../App";


function Counter(){
    const store = useContext(StoreContext)

    let coolRef = useRef(store.getState().counter)
    let stepRef = useRef(store.getState().stepSize)

    const onRef = () => {
        coolRef.current.textContent = store.getState().counter
        stepRef.current.value = store.getState().counter
    }

    const onStepRef = () => {
        stepRef.current.step = store.getState().stepSize
    }

    const updateCounter = value => {
        onRef()
        return {type: 'UPDATE_COUNTER',
                payload: value}
    }

    const changeStepSize = value => {
        onStepRef()

        return {
        type: 'CHANGE_STEP_SIZE',
        payload: value,
        }
    }

    return (
        <div className="Counter">

            <input
                ref={stepRef}
                type="range"
                min="1"
                max="100"
            />

            <input onChange={(e) => store.dispatch('change', changeStepSize(+e.target.value))} type="text"/>

            <p>Текущая величина шага:</p>
            <hr/>
            <button onClick={() => store.dispatch('update', updateCounter(store.getState().stepSize))}>Add</button>
            <span ref={coolRef}></span>
            <button onClick={() => store.dispatch('update', updateCounter(-store.getState().stepSize))}>Sub</button>
        </div>
    )
}

export default Counter