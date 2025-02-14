import App from '../components/Layout';
import Hero from '../components/Hero';
import Vision from '../components/Vision';
import AboutUs from '../components/AboutUs';
import Projects from '../components/Projects';
import News from '../components/News';
import BarComponent from '../components/BarComponent';

export default function Home() {
  return (
    <App id={1}>
      <div id="hero" className="section-border"><Hero /></div>
      <div id="about-us" className="section-border" style={{backgroundColor: 'lightblue'}}><AboutUs /></div>
      <div id="projects" className="section-border" style={{backgroundColor: 'lightgreen'}}><Projects /></div>
      <div id="news" className="section-border" style={{backgroundColor: 'lightblue'}}><News /></div>
      <div id="bar-component" className="section-border"><BarComponent /></div>
    </App>
  );
}
