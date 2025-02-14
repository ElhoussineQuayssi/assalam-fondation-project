// components/FlipCard.js
import { useState } from "react";
import { MailOutlined, PhoneOutlined, EnvironmentOutlined } from "@ant-design/icons";

const FlipCard = () => {
  const [flipped, setFlipped] = useState(false);

  const handleFlip = () => setFlipped(!flipped);

  return (
    <div
      className={`w-full h-80 bg-blue-600 rounded-lg text-white flex items-center justify-center p-6 transition-transform duration-300 ${
        flipped ? "rotate-y-180" : ""
      }`}
      style={{
        transformStyle: "preserve-3d",
        transform: "rotateY(0deg)",
        transition: "transform 0.6s",
      }}
      onMouseEnter={handleFlip}
      onMouseLeave={handleFlip}
    >
      {/* Front Side (Slogan) */}
      <div
        className={`absolute w-full h-full text-center flex items-center justify-center ${
          flipped ? "hidden" : ""
        }`}
      >
        <h3 className="text-xl font-bold">Transforming Lives, Building Futures</h3>
      </div>

      {/* Back Side (Location, Phone, Email) */}
      <div
        className={`absolute w-full h-full bg-white text-black flex flex-col items-center justify-center space-y-4 p-6 ${
          flipped ? "" : "hidden"
        }`}
      >
        <p className="flex items-center">
          <EnvironmentOutlined className="mr-2" /> Casablanca, Anfa, Morocco
        </p>
        <p className="flex items-center">
          <PhoneOutlined className="mr-2" /> +212 5XX XXX XXX
        </p>
        <p className="flex items-center">
          <MailOutlined className="mr-2" /> contact@fondationassalam.ma
        </p>
      </div>
    </div>
  );
};

export default FlipCard;
