// src/pages/Home.js
import React, { Component } from "react";
import Article from "../components/Article";


class Home extends Component {
  constructor() {
    super();
    // Initialisation de l'état du composant
    this.state = {
      articles: [], // Un tableau pour stocker les articles récupérés depuis l'API
      searchTerm: "", // Une chaîne vide pour stocker le terme de recherche de l'utilisateur
    };
  }

  componentDidMount() {
    // Cette méthode est appelée automatiquement après le montage du composant
    // Elle effectue une requête HTTP pour récupérer des articles depuis l'API de TechCrunch
    fetch("https://techcrunch.com/wp-json/wp/v2/posts")
      .then((response) => response.json())
      .then((articles) => this.setState({ articles })) // Met à jour l'état avec les articles récupérés
      .catch((error) => console.error(error)); // En cas d'erreur, affiche un message d'erreur dans la console
  }

  handleSearch = (event) => {
    // Cette méthode gère les changements dans l'entrée de recherche de l'utilisateur
    // Elle met à jour l'état "searchTerm" avec la valeur entrée par l'utilisateur en minuscules
    const searchTerm = event.target.value.toLowerCase();
    this.setState({ searchTerm });
  };

  render() {
    const articles = this.state.articles; // Récupération des articles depuis l'état
    console.log(articles)
    return (
      <div>
        <header>
          {/* En-tête du site */}
          <div className="nav container">
            <a href="#" className="logo">
              <img
                src="https://assets.stickpng.com/images/62976c097ec76b82fb21fcf7.png"
                alt=""
              />
            </a>
          </div>
        </header>

        <section className="home" id="home">
          {/* Section d'accueil */}
          <div className="home-text container">
            <h2 className="home-title">Techcrunch Blogger.</h2>
            <span className="home-subtitle">Bienvenue A Notre Blog.</span>
          </div>
        </section>

        <section className="about container" id="about">
          {/* Section "À propos" */}
          <div className="contentBx">
            <h2 className="titleText">
              Découvrez les Technologies Révolutionnaires Qui Façonnent Notre Avenir
            </h2>
            <p className="title-text">
             Plongez dans l'univers en constante évolution de la technologie, où l'innovation rencontre l'avenir. Bienvenue sur notre blog TechCrunch, votre passerelle vers les dernières avancées, les tendances émergentes et les réflexions aiguisées de l'industrie tech.
            </p>
           
          </div>
          <div className="imgBx">
            <img src="https://img.freepik.com/photos-premium/jeune-femme-afro-americaine-ordinateur-portable-assis-sol-tenant-du-cafe-emporter-mobile_1368-119477.jpg" alt="" className="fitBg" />
          </div>
        </section>

        <div className="post-filter container">
          {/* Barre de recherche pour filtrer les articles */}
          <input
            type="text"
            placeholder="Rechercher un article..."
            onChange={this.handleSearch} // Appelle la méthode handleSearch lorsqu'un utilisateur tape
          />
        </div>
        <br></br>
        <br></br>
        <div className="post container">
          {/* Section des articles */}
          {articles
            .filter((article) =>
              article.title.rendered
                .toLowerCase()
                .includes(this.state.searchTerm)
            )
            .map((article) => (
              <Article key={article.id} article={article} />
            ))}
          {/* Cette partie filtre les articles en fonction du terme de recherche
             et les affiche en utilisant le composant Article */}
        </div>

        <footer>
          {/* Pied de page du site */}
          <div className="footer-container">
            <div className="sec aboutus">
              <h2>A propos de nous</h2>
              <p>
                Chez TechCrunch, nous sommes passionnés par l'innovation et
                l'impact positif qu'elle peut avoir sur notre monde en constante
                évolution. Notre blog est bien plus qu'une simple plateforme
                d'information technologique. C'est un lieu de découverte,
                d'inspiration et de connexion pour tous ceux qui partagent
                notre fascination pour les avancées technologiques.
              </p>
              <ul className="sci">
                <li>
                  <a href="#">
                    <i className="bx bxl-facebook"></i>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="bx bxl-instagram"></i>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="bx bxl-twitter"></i>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="bx bxl-linkedin"></i>
                  </a>
                </li>
              </ul>
            </div>
            <div className="sec quicklinks">
              <h2>Quick Links</h2>
              <ul>
                <li>
                  <a href="#">Home</a>
                </li>
                <li>
                  <a href="#">About</a>
                </li>
                <li>
                  <a href="#">contact</a>
                </li>
                <li>
                  <a href="#">service</a>
                </li>
              </ul>
            </div>
            <div className="sec contactBx">
              <h2>Contactez-nous</h2>
              <ul className="info">
                <li>
                  <span>
                    <i className="bx bxs-map"></i>
                  </span>
                  <span>
                    6444 London street <br /> Brighton PA 33445 <br /> Uk
                  </span>
                </li>
                <li>
                  <span>
                    <i className="bx bx-envelope"></i>
                </span>
                <p>
                  <a href="mailto:techcrunch@gmail.com">
                    techcrunch@gmail.com
                  </a>
                </p>
              </li>
            </ul>
          </div>
        </div>
      </footer>
    </div>
  );
}
}

export default Home;
