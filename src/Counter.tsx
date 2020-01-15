import React, { useState } from 'react';

type CounterProps = {

};

function Counter() {
    const [count, setCount] = useState<number>(0);
    const onIncrease = () => setCount(prevNumber => prevNumber + 1);
    const onDecrease = () => setCount(prevNumber => prevNumber - 1);

    return (
        <div>
            <h1>{count}</h1>
            <div>
                <button onClick={onIncrease}>+1</button>
                <button onClick={onDecrease}>-1</button>
            </div>
        </div>
    )
}

export default Counter;