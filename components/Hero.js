import React from 'react';
import { useRouter } from 'next/router';

const Hero = () => {
  const router = useRouter();

  const handleButtonClick = () => {
    router.push('/about'); // Redirect to the About Us page
  };

  return (
    <div className="hero" style={{ 
      backgroundImage: 'url(/bg.jpg)', 
      backgroundSize: 'cover', 
      backgroundPosition: 'center', 
      height: '100vh', // Updated height
      display: 'flex', 
      flexDirection: 'column', 
      justifyContent: 'center', 
      alignItems: 'center', 
      color: 'white', 
      position: 'relative' 
    }}>
      <div className="overlay" style={{
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: 'rgba(0, 0, 0, 0.5)', // Black overlay with 50% opacity
        zIndex: 1
      }} />
      <h1 style={{ zIndex: 2, marginBottom: '20px' }}>Assalam Fondation</h1>
      <p style={{ zIndex: 2, marginBottom: '20px' }}>Transforming Lives, Building Futures: The assalam foundation's commitment to social development Casablanca anfa </p>
      <button onClick={handleButtonClick} className="hero-button" style={{ zIndex: 2 }}>
        About Us
      </button>
    </div>
  );
};

export default Hero;
