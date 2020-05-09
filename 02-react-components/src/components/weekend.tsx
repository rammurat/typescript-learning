import React from 'react'
import ReactDOM from 'react-dom'


interface WeekendProps<T> {
    items: T[];
}

function Weekend<T>(props: WeekendProps<T>) {
    const { items } = props;

    return (
        <div className='ts-weekend'>
            {items.map((row, i)=> {
                return <span key={i}>{row}</span>
            })}
        </div>
    );
}

export default Weekend