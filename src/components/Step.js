import React, {useContext} from 'react'
import {StoreContext} from "../App";

function Step() {

    const store = useContext(StoreContext)
    console.log(store)
    return (
        <>
        </>
    )
}

export default Step