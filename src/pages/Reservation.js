import React from 'react';
import Reserve from '../components/Reserve';
import Address from '../components/Address';

export default function Reservation() {
    return (
        <>
        <div className="wrapper">
        <div  className="container"> <Reserve /></div>
        </div>
        <div className="wrapper">
        <div className="container"><Address/></div>
        </div>
        </>
    )
}
