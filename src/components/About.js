import React from 'react';

const About = ({ image, name, about }) => {
  const defaultImage = "https://via.placeholder.com/215"; 
  const imgSrc = image || defaultImage; 

  console.log("Image source: ", imgSrc); 
  return (
    <aside className="about">
      <h1>{name}</h1>
      <img src={imgSrc} alt="blog logo" />
      <p>{about}</p>
    </aside>
  );
};

export default About;
