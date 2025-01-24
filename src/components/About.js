// src/components/About.js
import React from 'react';

const About = ({ image, name, about }) => {
  const defaultImage = "https://via.placeholder.com/215"; // Default image URL
  const imgSrc = image || defaultImage; // Use the passed `image` prop or the default image

  return (
    <aside className="about">
      <h1>{name}</h1>
      <img src={imgSrc} alt="blog logo" />
      <p>{about}</p>
    </aside>
  );
};

export default About;
