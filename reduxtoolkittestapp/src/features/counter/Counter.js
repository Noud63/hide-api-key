import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { increment, decrement, incrementByAmount } from './counterSlice'

const Counter = () => {

    const count = useSelector(state => state.counter.value)
    const dispatch = useDispatch()

    const [number, setNumber] = useState()

    const add = () => {
        dispatch(incrementByAmount(Number(number) || 0))
    }

    return (
        <div>
            {/* {count}
            <div>
                <button aria-label='Increment value' onClick={() => dispatch(increment())}>Increment</button>
                <button aria-label='Decrement value' onClick={() => dispatch(decrement())}>Decrement</button>
            </div>

            <input type="number" value={number || ""} onChange={(e) => setNumber(e.target.value)} />
            <button type='button' onClick={add}>Add Amount</button> */}
        </div>
    )
}

export default Counter
