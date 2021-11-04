import React from 'react'
import Address from '../components/Address'
import Amenity from '../components/Amenities'

export default function Amenities() {
    return (
      <>
      <h1>Our Amenities</h1>
      
      
      
      
      <div className="a-wrapper">
      <div>
      <div  className="a-container">      <div>
      <p>The comfort of home and excitement of Costa del Sol strike a perfect balance at our beautiful hotel.
          Our experienced and friendly staff, new rooms, fully renovated lobby and dining area will make your stay flawless.</p>
      <div>
        <ul>
          <li>Complimentary Beach Services</li>
          <li>In-Room Complimentary Wi-Fi Access</li>
          <li>In-Room Electronic Safe Deposit Box</li>
          <li>Complimentary Wi-Fi Access in Public Areas</li>
        </ul>
      </div>
      </div>
</div>
      <div className="a-container"><Address/>  </div>
</div>
      <div className="a-container2"> <Amenity/> </div>

      </div>
      </>
    )
}
