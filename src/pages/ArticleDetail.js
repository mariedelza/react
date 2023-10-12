import { useParams } from 'react-router-dom';
import React, { useEffect, useState } from "react";

const ArticleDetail = () => {
  const [article, setArticle] = useState({});
  const { id } = useParams();

  useEffect(() => {
    const apiUrl = `https://techcrunch.com/wp-json/wp/v2/posts/${id}`;
    
    fetch(apiUrl)
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => {
        setArticle(data);
      })
      .catch(error => {
        console.error('Error fetching article:', error);
      });
  }, [id]);

  // Définir une classe CSS pour l'image
  const imageStyle = {
    width: '50%', 
    maxWidth: '100%', 
  };

  return (
    <div class="titre">
      <h1>{article.title?.rendered}</h1>
      {article.featured_media && (
        <img
          src={article.jetpack_featured_media_url}
          alt={article.title?.rendered}
          style={imageStyle} 
        />
      )}
      <div>
        <p dangerouslySetInnerHTML={{ __html: article.content?.rendered }} />
      </div>
    </div>
  );
}

export default ArticleDetail;
