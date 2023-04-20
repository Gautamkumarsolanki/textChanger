import React from 'react'



function Alert(props) {
    return (
        <div style={{height:"70px"}}>
            {props.data && <div id="alert" className={`alert alert-${props.data.type} alert-dismissible fade show`} role="alert">
                <strong>Hey Roshan!</strong> {props.data.text}
                <button type="button" className="btn-close" onClick={()=>{
                    document.getElementById('alert').style.display='none';
                }} aria-label="Close"></button>
            </div>}
        </div>
    )
}
export default Alert;