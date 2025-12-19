
# YumGuard – SHOP

**Nom :** SEYE
**Prénom :** Ousmane
**Classe :** E4 WMD – ESTIAM

**Repository GitHub :**
[https://github.com/KID-1123/organisation-alimentaire.git](https://github.com/KID-1123/organisation-alimentaire.git)

**ID de connexion :** [test@yopmail.com](mailto:test@yopmail.com)
**Mot de passe :** azerty123

## Contexte du projet

Ce projet s’inscrit dans le cadre de l’exercice **“My Shop”**, dont l’objectif est de transformer une application front-end existante en une application plus robuste, plus livrable et plus proche d’un contexte professionnel réel.

Au cours du développement, le projet a été repris et restructuré afin de mieux répondre aux attentes pédagogiques. Le périmètre fonctionnel a évolué vers une application de vente de plats alimentaires équilibrés, organisée par objectifs nutritionnels (équilibre, perte de poids, prise de masse, etc.).

Le développement a été réalisé dans un temps contraint, en parallèle d’une alternance, avec des contraintes personnelles importantes liées notamment au renouvellement de mon titre de séjour. Cette situation m’obligeait à effectuer des allers-retours constants à la préfecture, dans un contexte où il était difficile d’obtenir un rendez-vous. Malgré cela, j’ai fait le choix de prioriser la qualité globale du projet en mettant en place les éléments essentiels demandés : UX améliorée, tests unitaires, CI fonctionnelle et application front-end autonome.

Une vidéo de démonstration sera également fournie afin de présenter le fonctionnement de l’application, au cas où l’environnement local ne pourrait pas être lancé facilement.

## Objectif du projet

L’objectif principal de YumGuard est de proposer une application front-end de vente de plats équilibrés, permettant à un utilisateur de :

* Parcourir un catalogue de plats organisés par programmes nutritionnels
* Ajouter des plats à un panier
* Passer une commande via un parcours de commande structuré
* Consulter ses commandes
* Visualiser des informations claires sur les prix, les totaux et le statut des commandes

Le projet met l’accent sur :

* Une expérience utilisateur fluide et compréhensible
* Une architecture front-end propre et testée

## Périmètre fonctionnel actuel

### Catalogue de plats

* Affichage des plats disponibles
* Organisation par catégories et objectifs nutritionnels
* Navigation claire entre les pages
* États visuels gérés (chargement, absence de données)

### Panier

* Ajout et suppression de plats
* Gestion des quantités
* Calcul automatique des totaux
* Badge panier mis à jour dynamiquement dans la navbar

### Commande et paiement (mock)

* Simulation d’un parcours de commande
* Saisie d’une adresse de livraison
* Sélection d’un moyen de paiement (mock)
* Création d’une commande stockée localement

### Commandes

* Liste des commandes passées
* Affichage des informations clés (date, adresse, paiement, total)
* Gestion d’un statut de commande (en cours, livrée)
* Possibilité de marquer une commande comme livrée

## Choix techniques

### Frontend

* React avec TypeScript
* Vite comme outil de build
* React Router pour la navigation
* Context API pour la gestion d’état (panier, authentification)
* Axios pour les appels API ou mocks
* CSS dédié par composant

### Tests

* Vitest comme framework de tests
* React Testing Library pour les tests de composants

Les tests unitaires couvrent :

* la logique métier (panier, services)
* les selectors
* les composants clés (Cart, Login)

Tous les tests passent en local et en CI.

## Mock et backend

L’application peut être lancée sans backend actif.

* Les données critiques (commandes, panier) sont simulées via le localStorage
* Les appels API peuvent être mockés
* Aucun serveur backend n’est requis pour tester le projet

Cela permet au correcteur de lancer et tester l’application uniquement avec le frontend.

## Intégration Continue (CI)

Une pipeline GitHub Actions est mise en place et s’exécute automatiquement sur les Pull Requests vers la branche `main`.

La CI exécute :

* Installation des dépendances
* Lint du code
* Tests unitaires
* Build de l’application

Toute erreur dans l’un de ces points bloque la validation de la Pull Request.

## Installation du projet (Frontend uniquement)

### Prérequis

* Node.js version 18 ou supérieure
* npm

### Clonage du repository

```bash
git clone https://github.com/KID-1123/organisation-alimentaire.git
cd organisation-alimentaire/organisation-alimentaire-frontend
```

### Installation des dépendances

```bash
npm install
```

### Lancement en mode développement

```bash
npm run dev
```

L’application sera accessible par défaut à l’adresse suivante :
[http://localhost:5173](http://localhost:5173)

## Commandes utiles

Lancer l’application :

```bash
npm run dev
```

Lancer les tests :

```bash
npm test
```

Lancer les tests pour la CI :

```bash
npm run test:ci
```

Lancer le lint :

```bash
npm run lint
```

Build de production :

```bash
npm run build
```

## Remarques finales

Ce projet a été construit et finalisé dans un temps limité, avec une volonté claire de respecter les exigences principales de l’exercice : qualité du code, tests, CI et application front-end exploitable.

Une vidéo de démonstration sera fournie en fichier ZIP avec le devoir afin de faciliter la correction et de présenter visuellement le fonctionnement global de l’application.

