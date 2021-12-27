import React from 'react'

export default function Footer(props) {
    return (
        <div className='row fixed-bottom'>
            <button className='col-2 btn btn-danger' onClick={props.Reset}>Reset</button>
            <span className='col-8 bg-dark text-white text-center'>
                {"₹ "+props.TotalAmount}
            </span>
            <button className='col-2 btn btn-warning'>Pay Now</button>
        </div>
    )
}
