// src/components/ArticleList.js
import React from 'react';
import Article from './Article';

const ArticleList = ({ posts }) => {
  return (
    <main className="article-list"> {/* Added a <main> element here */}
      {posts.map((post) => (
        <Article 
          key={post.id}
          title={post.title}
          date={post.date}
          preview={post.preview}
        />
      ))}
    </main>
  );
};

export default ArticleList;
