import React from 'react'

const Alert = ({ alert }) => {
    return ( // alert-type is a reference to the css file for color. 
        alert !== null && (
            <div className={`alert alert-${alert.type}`}> 
                <i className="fas fa-info-circle"></i> {alert.msg}
            </div>
        )
    )
}

export default Alert