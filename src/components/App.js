
import React from 'react';
import About from './About';
import ArticleList from './ArticleList';
import Header from './Header';

const App = () => {
  const posts = [
    {
      id: 1,
      title: 'Components 101',
      date: 'December 15, 2020',
      preview: 'Setting up the building blocks of your site',
    },
    {
      id: 2,
      title: 'React Data Flow',
      date: 'December 11, 2020',
      preview: 'Passing props is never passé',
    },
    {
      id: 3,
      title: 'Function vs Class Components',
      preview: 'React, meet OOJS.',
    }
  ];

  const aboutData = {
    name: 'Underreacted',
    image: 'https://via.placeholder.com/150',
    about: 'A blog about learning React',
  };

  return (
    <div className="App"> {}
      <Header name={aboutData.name} />
      <About image={aboutData.image} name={aboutData.name} about={aboutData.about} />
      <ArticleList posts={posts} />
    </div>
  );
};

export default App;
