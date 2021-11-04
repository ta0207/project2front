import React from 'react';
import img from '../images/amenity1.jpg'
import img2 from '../images/amenity2.jpg'
import img3 from '../images/amenity3.jpg'
import img4 from '../images/hotel1.jpg'

export default function Amenities({ room }) {


  return (
      <>

    <article><h4>PLAY, LEARN & MEET</h4>
        <div>
            
            <div>
               Designed for children ages of 3 to 12, the new Coral KidZ Club turns up the dial on make-believe and takes the playground concept to another level.
            </div> 
            <div>
                <img src={img} alt="single room" className="room-photo"/>
            </div>
        </div>
    </article>
<br/><br/>

    <article><h4>OUTDOOR DINING</h4>
             <p>The wide diversity of cuisine offered spans the traditional and modern to satisfy a range of tastes.</p><div>
        <div>
        <img src={img2} alt="King room" className="room-photo" />
        </div>
      </div>
    </article>
    <br/><br/>
    <article><h4>FITNESS CENTER</h4> <p>
Our spacious fitness center is available at your convenience </p>
      <div>
        <img src={img3} alt="Suite" className="room-photo"/>
      </div>
    </article>
    <br/><br/>
<article> <h4>SPA SERVICE</h4>
  <div>
  <div>
    <p>Get your awe-inspiring spa treatments utilizing chakra-balancing gems, a unique hydrotherapy ritual, and sophisticated design elements.</p>
  </div>
        <div>
        <img src={img4} alt="Awesome Room" className="room-photo" /> 
        </div>
        
        </div>
</article>

    </>
  );
}
