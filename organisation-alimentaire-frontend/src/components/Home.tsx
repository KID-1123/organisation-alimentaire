import "./Home.css";

import hero from "../assets/shutterstock_424476892-1613995069-hero.jpg";
import { useState } from "react";

import cover from "../assets/9d9d38d3-aa62-4b08-bf2a-f53fb81e7fed-cover.png";
import collage from "../assets/Home_SupportImages_Meal-Collage_ba7b3fcf-68bb-4952-aea2-9920385ec6fa.webp";
import taste from "../assets/taste-the-truth-why-fresh-ingredients-matter-1024x683.jpg";
import cleanFood from "../assets/clean-food-meal-boxes-rice-and-rice-berry-with-beef-royalty-free-image-1681396511.avif";
import variety from "../assets/eat-variety-healthy-foods-image-614x345.jpg";
import delivery from "../assets/250807-meal-delivery-bd-main-4202d3.jpg";

import weightLoss from "../assets/meal-prep-for-weight-loss-main-square.jpg";
import muscle from "../assets/Creamy-Lemon-Dill-Skillet-Chicken-367-3b158dee2f754dedb81fe1d3b59dfa17.jpg";
import balance from "../assets/veganpowerbowls.jpg";
import sport from "../assets/eat-before-workout-GettyImages-2148051682-a65fc3aa0f54477dacdcb5b98a37ff38.jpg";

import mealPrep from "../assets/Lundberg-Rice-Meal-Prep-Image.jpg";
import sddefault from "../assets/sddefault.jpg";
import oip from "../assets/OIP.jpeg";
import deco from "../assets/d2b05220-0e3a-4b1e-8210-b36ca328004f.png";

const Home = () => {
  const [isProgramsModalOpen, setIsProgramsModalOpen] = useState(false);

  return (
    <div className="home">
      {/* HERO */}
      <section className="section section-hero">
        <img className="hero-img" src={hero} alt="YUMGUARD - plats équilibrés" />
        <div className="hero-overlay">
          <div className="container hero-content">
            <h1 className="hero-title">Des plats équilibrés, adaptés à ton objectif</h1>
            <p className="hero-subtitle">
              YumGuard te propose des repas sains, prêts à consommer, pensés pour t’aider
              à mieux manger au quotidien sans te prendre la tête.
            </p>

            <div className="hero-actions">
            <button
             className="btn btn-primary"
               onClick={() => setIsProgramsModalOpen(true)} >Voir les programmes</button>      
          <button className="btn btn-ghost">Comment ça marche ?</button>
            </div>
          </div>
        </div>
      </section>

      {/* C’EST QUOI */}
      <section className="section section-dark">
        <div className="container">
          <h2 className="title">C’est quoi YumGuard ?</h2>
          <p className="text">
            YumGuard est un site de vente de plats équilibrés organisés en programmes nutritionnels.
            L’idée est simple : au lieu de choisir “un plat au hasard”, tu choisis un programme
            qui correspond à ton objectif, puis tu commandes des repas adaptés.
          </p>
          <p className="text">
            Que tu manques de temps, que tu veuilles mieux manger, perdre du poids, prendre de la masse
            ou rester en forme : YumGuard te donne une solution claire, structurée et facile à suivre.
          </p>

          <div className="image-grid image-grid-3">
            <img src={cover} alt="Présentation YumGuard" />
            <img src={collage} alt="Collage de plats YumGuard" />
            <img src={taste} alt="Ingrédients et fraîcheur" />
          </div>
        </div>
      </section>

      {/* POURQUOI */}
      <section className="section section-darker">
        <div className="container">
          <h2 className="title">Pourquoi on fait ça</h2>
          <p className="text">
            Beaucoup de personnes veulent manger équilibré, mais sont bloquées par le manque de temps,
            le manque d’idées ou une alimentation désorganisée. YumGuard existe pour rendre l’équilibre
            simple et accessible : tu suis un programme, tu manges mieux, tu avances vers ton objectif.
          </p>

          <div className="image-grid image-grid-2">
            <img src={cleanFood} alt="Meal prep équilibré" />
            <img src={variety} alt="Variété alimentaire" />
          </div>
        </div>
      </section>

      {/* PROGRAMMES */}
      <section className="section section-dark">
        <div className="container">
          <h2 className="title">Nos programmes</h2>
          <p className="text">
            Chaque programme est pensé pour un besoin précis. Tu choisis ton objectif et on te propose
            des repas cohérents avec ce que tu veux atteindre.
          </p>

          <div className="programs-grid">
            <article className="program-card">
              <img src={weightLoss} alt="Programme perte de poids" />
              <div className="program-body">
                <h3 className="program-title">🔥 Perte de poids</h3>
                <p className="program-text">
                  Des plats plus légers, rassasiants et équilibrés pour perdre du poids durablement
                  sans frustration.
                </p>
              </div>
            </article>

            <article className="program-card">
              <img src={muscle} alt="Programme prise de masse" />
              <div className="program-body">
                <h3 className="program-title">💪 Prise de masse</h3>
                <p className="program-text">
                  Des repas riches en protéines et en énergie pour accompagner tes entraînements
                  et favoriser la croissance musculaire.
                </p>
              </div>
            </article>

            <article className="program-card">
              <img src={balance} alt="Programme équilibre alimentaire" />
              <div className="program-body">
                <h3 className="program-title">🥗 Équilibre alimentaire</h3>
                <p className="program-text">
                  Une alimentation saine, variée et équilibrée pour garder une bonne hygiène de vie
                  au quotidien.
                </p>
              </div>
            </article>

            <article className="program-card">
              <img src={sport} alt="Programme sport et énergie" />
              <div className="program-body">
                <h3 className="program-title">⚡ Sport & énergie</h3>
                <p className="program-text">
                  Des plats pensés pour optimiser tes performances, ta récupération et ton niveau
                  d’énergie.
                </p>
              </div>
            </article>
          </div>
        </div>
      </section>

      {/* COMMENT ÇA MARCHE */}
      <section className="section section-darker">
        <div className="container">
          <h2 className="title">Comment ça marche ?</h2>

          <div className="steps-grid">
            <div className="step-card">
              <h3 className="step-title">1️⃣ Choisis ton programme</h3>
              <p className="step-text">
                Perte de poids, prise de masse, équilibre ou sport : tu pars sur un objectif clair.
              </p>
            </div>

            <div className="step-card">
              <h3 className="step-title">2️⃣ Commande tes plats</h3>
              <p className="step-text">
                Tu sélectionnes tes repas. Tout est cadré et cohérent avec ton programme.
              </p>
            </div>

            <div className="step-card">
              <h3 className="step-title">3️⃣ Mange, répète, progresse</h3>
              <p className="step-text">
                Tu gardes une routine simple et tu avances sans prise de tête.
              </p>
            </div>
          </div>

          <div className="image-grid image-grid-4">
            <img src={delivery} alt="Livraison / commande" />
            <img src={mealPrep} alt="Meal prep" />
            <img src={sddefault} alt="Repas" />
            <img src={oip} alt="Plat équilibré" />
          </div>
        </div>
      </section>

      {/* CTA FINAL */}
      <section className="section section-dark">
        <div className="container cta-box">
          <div className="cta-left">
            <h2 className="title">Prêt à commencer ?</h2>
            <p className="text">
              YumGuard t’aide à manger mieux, avec des plats équilibrés organisés par programmes.
              Choisis ton objectif et démarre maintenant.
            </p>

            <div className="cta-actions">
              <button className="btn btn-primary">Découvrir les programmes</button>
              <button className="btn btn-ghost">Voir un exemple de menu</button>
            </div>
          </div>
          {isProgramsModalOpen && (
  <div
    className="programs-modal-overlay"
    onClick={() => setIsProgramsModalOpen(false)}
  >
    <div
      className="programs-modal"
      onClick={(e) => e.stopPropagation()}
    >
      <h2 className="modal-title">Nos programmes YumGuard</h2>

      <p className="modal-text">
        <strong>🔥 Perte de poids</strong><br />
        Ce programme est pensé pour t’aider à perdre du poids durablement.
        Les repas sont équilibrés, moins caloriques, riches en fibres et en
        protéines afin de favoriser la satiété, limiter les fringales et
        t’aider à garder une routine alimentaire stable sur le long terme.
      </p>

      <p className="modal-text">
        <strong>💪 Prise de masse</strong><br />
        Ce programme accompagne les entraînements intensifs. Il propose
        des plats plus riches en calories, en protéines et en glucides
        complexes pour soutenir la récupération musculaire et favoriser
        la prise de masse de manière contrôlée.
      </p>

      <p className="modal-text">
        <strong>🥗 Équilibre alimentaire</strong><br />
        Idéal pour ceux qui veulent simplement mieux manger. Les repas
        sont variés, équilibrés et pensés pour maintenir une bonne hygiène
        de vie sans objectif strict de poids.
      </p>

      <p className="modal-text">
        <strong>⚡ Sport & énergie</strong><br />
        Pensé pour les personnes actives, ce programme aide à maintenir
        un bon niveau d’énergie tout au long de la journée, optimiser
        les performances sportives et améliorer la récupération.
      </p>

      <button
        className="btn btn-ghost"
        onClick={() => setIsProgramsModalOpen(false)}
      >
        Fermer
      </button>
    </div>
  </div>
)}


          <div className="cta-right">
            <img className="cta-img" src={deco} alt="Illustration" />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
