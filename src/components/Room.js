import React from 'react';
import img from '../images/room1.jpg'
import img2 from '../images/room2.jpg'
import img3 from '../images/room3.jpg'
import img4 from '../images/room4.jpg'

export default function Room({ room }) {
    const name = ["1 - Double", "Beach Front","Master Suite","Presidential"]


  return (
      <> <div className="margin">
    <article>
        <img src={img} alt="single room" className="room-photo"/>
  <p className="room-info">{name[0]}</p>
    </article>


    <article>
        <img src={img2} alt="single room" className="room-photo"/>
  <p className="room-info">{name[1]}</p>
    </article>



    <article>
        <img src={img3} alt="single room" className="room-photo"/>
  <p className="room-info">{name[2]}</p>
    </article>

<article>
    <img src={img4} alt="single room" className="room-photo" />
<p className="room-info">{name[3]}</p>
</article>


</div>

    </>
  );
}
