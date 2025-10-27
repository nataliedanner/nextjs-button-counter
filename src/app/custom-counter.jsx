// Custom Counter

"use client";
import { useState } from 'react';

export default function CustomCounter({ initialCount = 4, initialStep = 3}) {
    const [count, setCount] = useState(initialCount)
    const [step] = useState(initialStep)
    return (
        <div>
            <p aria-live="polite"> Total Count: {count}</p>
            <button onClick={() => setCount(count + step)}> 
                <input id="input" type="number" step={initialStep} ></input>
                Increment </button>
            <button onClick={() => setCount(count - step)} disabled={count===1}>
                <input id="input" type="number" step={initialStep} ></input> 
                Decrement</button>
            <button onClick={() => setCount(initialCount)}> Reset</button>
        </div>
        
    )
}

