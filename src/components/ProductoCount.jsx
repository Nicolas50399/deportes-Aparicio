
import React, { useState } from 'react'
import './ProductoCount.css'

const ButtonComponentAdd = ({count,changeCount,stock}) => {
    return <button onClick={
        () => adding(count,changeCount,stock)
    }>+</button>
  }

  const ButtonComponentRemove = ({count,changeCount}) => {
    return <button onClick={
        () => {
            subs(count,changeCount)
        }
    }>-</button>
  }
  
  function adding(count,changeCount, stock) {
    if(count < stock){
        changeCount(count + 1);
    }
}

function subs(count,changeCount) {
    if(count > 0){
        changeCount(count - 1);
    }
}

function ProductoCount({stock}) {

    const [count, setCount] = useState(0);
    const handleCount = (value) => setCount(value);

    
  return (
    <div>
        <ButtonComponentRemove count={count} changeCount={handleCount}/>
        {/* <button onClick={subs} className="button button5">-</button> */}
        <span>{count}</span>
        {/* <button onClick={adding} className="button button1">+</button> */}
        <ButtonComponentAdd count={count} changeCount={handleCount} stock={stock}/>
    </div>
  )
}

export default ProductoCount;