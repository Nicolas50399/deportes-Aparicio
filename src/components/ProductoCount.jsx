
import React, { useState } from 'react'
import { useContext } from 'react'
import './ProductoCount.css'
import { CountContext } from './utils/ProductoDetail'

const ButtonComponentAdd = ({count,changeCount,stock}) => {
    return <button className='button1' onClick={
        () => {
            adding(count,changeCount,stock)
        }
    }>+</button>
  }

  const ButtonComponentRemove = ({count,changeCount}) => {
    return <button className='button5' onClick={
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

function ProductoCount({stock,precio}) {
    const { cambiarCount } = useContext(CountContext);
    const [count, setCount] = useState(0);
    const handleCount = (value) => {
        setCount(value);
        cambiarCount(value);
    }
    
  return (
    <>
    <div>
        <ButtonComponentRemove count={count} changeCount={handleCount}/>
        {/* <button onClick={subs} className="button button5">-</button> */}
        <span>{count}</span>
        {/* <button onClick={adding} className="button button1">+</button> */}
        <ButtonComponentAdd count={count} changeCount={handleCount} stock={stock}/>
    </div>
    <h5>({stock}) Disponibles</h5>
    <h6>Costo total = ${precio*count}</h6>
    </>
    
    
  )
}

export default ProductoCount;