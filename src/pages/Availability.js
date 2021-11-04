import React from 'react'
import Validate from '../components/Validate';
import Address from '../components/Address';
import Room from '../components/Room';


export default function Availability() {
    return (
        <>
        <h1>Search Available Rooms</h1>
        
        
        
        
        <div className="a-wrapper">
        <div>
        <div  className="a-container"> <Validate /> </div>
        <div className="a-container"><Address/>  </div>
</div>
        <div className="a-container2"> <Room/> </div>

        </div>
        </>
    )
}
