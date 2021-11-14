import React from 'react';
import ImageOne from '../images/smart-01.jpg';
import ImageTwo from '../images/smart-02.jpg';

const Content = () => {
  return (
    <div className="flex flex-col justify-center items-cener bg-white h-screen font-mono py-40">
      <img
        src={ImageTwo}
        alt="smart home"
        className="h-full rounded mb-20 shadow"
      />
      <div className="flex flex-col justify-center items-center">
        <h2 className="text-2xl mb-2">Automate almost anything...</h2>
        <p className="mb-2">Turn your Regular Home into a Smart Home</p>
      </div>
    </div>
  );
};

export default Content;
