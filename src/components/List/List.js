import React from 'react';
import './ListStyle.css'

export const List = () => {
  return (
      <>
      <h2>¿Qué vendemos?</h2>
        <ul className='listContainer'>
            <li>Accesorios</li>
            <li>Vestimenta</li>
            <li>Pelotas</li>
        </ul>
      </>
  );
  
}