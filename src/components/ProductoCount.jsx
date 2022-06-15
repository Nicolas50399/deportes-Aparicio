
import React, { useState } from 'react'
import './ProductoCount.css'

function ProductoCount({stock}) {

    const [count, setCount] = useState(0);

    function adding() {
        if(count < stock){
            setCount(count + 1);
        }
    }

    function subs() {
        if(count > 0){
            setCount(count - 1);
        }
    }
  return (
    <div>
        <button onClick={subs} className="button button5">-</button>
        <span>{count}</span>
        <button onClick={adding} className="button button1">+</button>
        
    </div>
  )
}

export default ProductoCount;