import React from 'react';
import { Users, MapPin, Award, Users as UserIcon } from 'lucide-react';
import 'aos/dist/aos.css'; // Import AOS styles
import AOS from 'aos'; // Import AOS library
import { useEffect } from 'react';

const BarComponent = () => {
  useEffect(() => {
    AOS.init(); // Initialize AOS
  }, []);

  const squares = [
    { icon: <UserIcon />, number: '+300', text: 'Volunteer with the Foundation' },
    { icon: <MapPin />, number:'+35', text: 'Branches of the Foundation' },
    { icon: <Award />, number:'90%', text: 'Completed Programs' },
    { icon: <Users />, number: '+450' ,text: 'Beneficiary Family' },
  ];

  return (
    <div className="bar-component" style={{ display: 'flex', justifyContent: 'space-around', flexWrap: 'wrap', height: "" }}>
      {squares.map((square, index) => (
        <div key={index} className="square" data-aos="fade-up" style={{ margin: '10px', textAlign: 'center', flex: '1 1 200px', borderRadius: '8px', padding: '20px', backgroundColor: "#ebebeb" }}>
          <div className="icon flex justify-center p-5" style={{ fontSize: '38px', color: 'lightgreen' }}>{square.icon}</div>
          <p style={{ color: 'darkblue' }}>{square.number}</p>
          <p style={{ fontWeight: 'bold', color: 'darkblue' }}>{square.text}</p>
        </div>
      ))}
    </div>
  );
};

export default BarComponent;
