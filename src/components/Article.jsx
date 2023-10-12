import React from 'react';

// Une fonction pour formater la date en utilisant le fuseau horaire du Sénégal
const formatSenegalDate = (date) => {
  const options = { timeZone: 'Africa/Dakar', weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
  return new Date(date).toLocaleDateString('fr-FR', options);
};

// Une fonction pour formater l'heure en utilisant le fuseau horaire du Sénégal
const formatSenegalTime = (date) => {
  const options = { timeZone: 'Africa/Dakar', hour: 'numeric', minute: 'numeric', second: 'numeric' };
  return new Date(date).toLocaleTimeString('fr-FR', options);
};

// Le composant Article prend un article en tant que prop et l'affiche
const Article = ({ article }) => {
  // Formate la date de l'article en utilisant la fonction formatSenegalDate
  const formattedDate = formatSenegalDate(article.date);
  
  // Formate l'heure de l'article en utilisant la fonction formatSenegalTime
  const formattedTime = formatSenegalTime(article.date);

  return (
    <div className={`post-box ${article.primary_category.slug}`}>
      {/* Image de l'article */}
      <img
        src={article.jetpack_featured_media_url}
        alt=""
        className="post-img"
      />
      {/* Catégorie de l'article */}
      <h2 className="category">{article.primary_category.name}</h2>
      {/* Titre de l'article avec un lien vers l'article complet */}
      <a href={`/articles/${article.id}`} className="post-title">
        {article.title.rendered}
      </a>
      {/* Date et heure de publication de l'article au format sénégalais */}
      <div className="post-date">
        {formattedDate}<br />
        {formattedTime}
      </div>
      {/* Description de l'article (potentiellement avec du HTML) */}
      <p
        className="post-description"
        dangerouslySetInnerHTML={{ __html: article.excerpt.rendered }}></p>
      {/* Profil de l'auteur de l'article avec une image et le nom de l'auteur */}
      <div className="profile">
        <img src="assets/images/testi1.jpg" alt="" className="profile-img" />
        <span className="profile-name">{article.authors}</span>
      </div>
    </div>
  );
};

export default Article;
