const AboutUs = () => {
  return (
    <div className="about-us" style={{ height: '90vh',padding: '20px' }}>
      <h2 style={{ color: 'blue' }}>About Us</h2>
      <div className="about-us-content" style={{height: '100%'}}>
        <div className="description">
          <p>
            Welcome to Assalam Fondation! We are dedicated to making a positive impact in our community through various initiatives and programs. Our mission is to empower individuals and foster a sense of belonging and support.
          </p>
          <p>
            We believe in the power of collaboration and strive to work alongside community members to create sustainable solutions that address the needs of our society.
          </p>
        </div>
        <div className="video">
          <iframe 
            width="560" 
            height="415" 
            src="https://www.youtube.com/watch?v=THYvJgllb-o" 
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
