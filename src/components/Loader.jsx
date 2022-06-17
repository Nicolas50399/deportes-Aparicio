import React from 'react'
import "./LoaderStyle.css"

function Loader() {
  return (
    <div className="lds-spinner">
        <div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div>
    </div>
  )
}

export default Loader