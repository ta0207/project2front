import About from '../components/About'
import Address from '../components/Address'
import img from '../images/photo3.jpg'
import img2 from '../images/photo1.jpg'
import img3 from '../images/hotelfront.jpg'
import img4 from '../images/hotel4.jpg'
import img5 from '../images/hotel3.jpg'
import ImageGallery from 'react-image-gallery';

const Home = () => {

    const images = [
        {original: img5,originalHeight: '400px'},
        {original: img,originalHeight: '400px'},
        {original: img2,originalHeight: '400px'},
        {original: img3,originalHeight: '400px'},
        {original: img4,originalHeight: '400px'},
      ];
    return (
    <div>
        <h1>Costa del Sol</h1>
        <div className="wrapper">


            <div className="container"><ImageGallery  showThumbnails={false} showBullets={true} items={images} showPlayButton={false} showFullscreenButton={false} showNav={false}/><About/>  </div>
             <div className="container"> <Address/> </div>
          </div>
  
  </div>
    );
};

export default Home;
