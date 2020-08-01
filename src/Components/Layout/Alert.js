import React, { useContext } from 'react'
import AlertContext from '../../Context/alert/alertContext'

function Alert(){
    const alertContext = useContext(AlertContext);
    const { alert } = alertContext
    console.log(alert)

    return (
        alert !== null &&
        (
            <div className={`alert alert-${alert.type}`}>
                {alert.msg}
            </div>
        )
    )
}

export default Alert