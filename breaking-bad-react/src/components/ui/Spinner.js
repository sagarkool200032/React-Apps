import React from 'react'
import spin from '../../img/spinner.gif'

function Spinner() {
    return (
        <img src={spin} alt="Loading..." style={{width:'150px', margin: 'auto', display: 'block'}} />
    )
}

export default Spinner
