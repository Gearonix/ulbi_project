import React, {useState} from 'react';
import s from './Counter.module.scss';

const Counter = () => {
    const [count, setCount] = useState(0);

    const increment = () => {
        setCount(count + 1);
    }

    return (
        <div>
            <h1>{count} q</h1>
            <button onClick={increment} className={s.button}>increment</button>
        </div>
    );
};

export default Counter;
