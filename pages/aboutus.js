import App from '../components/Layout';
import BarAboutUs from '../components/BarAboutUs';
import HeroAboutUs from '../components/HeroAboutUs';
import Description from '../components/Description'; // Import the new Description component
import BureauNational from '../components/BureauNational';
import Vision from '../components/Vision'; // Import the Vision component
import Goal from '../components/Goal'; // Import the Goal component
import CarouselComponent from '@/components/CarouselComponent';
import ScrollBar from '@/components/ScrollBar';

function AboutUs() {
  const images = ['/bg-nous.jpg', '/bg-nous.jpg', '/bg-nous.jpg'];
  return (
    <App id={1}>
      <div className='section-border'>
      <HeroAboutUs />
      </div> 
      <div className='section-border'>
        <Description />
      </div>
      <div className='section-border'>
        <Vision /> {/* Add the Goal component here */}
      </div>
      <div className='section-border'>
        <Goal /> {/* Add the Vision component here */}
      </div>
      <div className='section-border'>
        <BureauNational />
      </div>
      <div className='section-border '>
       <BarAboutUs />
      </div>
      <div className='section-border w-full'>
        <ScrollBar images={images} />
      </div>
    </App>
  );
}

export default AboutUs;
