


# YUMGUARD – Organisation Alimentaire

Nom : SEYE
Prénom : Ousmane
Classe : E4 WMD – ESTIAM
Repository GitHub : [https://github.com/KID-1123/organisation-alimentaire.git](https://github.com/KID-1123/organisation-alimentaire.git)

## Introduction et contexte

Le projet YUMGUARD s’inscrit dans le cadre de l’exercice « My Shop – Production Ready ».
L’objectif était de rendre une application front-end plus livrable et plus proche d’un contexte réel de production, en améliorant la qualité globale, l’expérience utilisateur, les tests unitaires et la mise en place d’une intégration continue.

Ce projet a été réalisé dans un temps limité, en parallèle de mon alternance, avec des contraintes personnelles importantes à gérer, notamment le renouvellement de mon titre de séjour qui avait expiré. Cela a nécessité de nombreux déplacements administratifs (mairie, démarches urgentes), ce qui a fortement réduit mon temps disponible pour le développement.
Malgré cela, j’ai essayé de respecter au maximum les exigences demandées et d’implémenter les éléments essentiels attendus.

Une vidéo de démonstration sera fournie afin de présenter le projet et ses fonctionnalités principales, notamment dans le cas où l’application ne fonctionnerait pas directement sur l’environnement de correction.

## Objectif global du projet

Transformer l’application en un front-end « production-ready » avec :

* Une UX plus robuste (états de chargement, gestion des erreurs, navigation fiable)
* Des tests unitaires obligatoires (logique métier et composants)
* Une CI GitHub Actions exécutée sur les Pull Requests
* Un fonctionnement possible sans backend réel grâce à un mock
* Une structure claire et maintenable

## Présentation fonctionnelle

YUMGUARD est une application web destinée à aider les utilisateurs à mieux organiser leur alimentation quotidienne.
Le projet repose sur plusieurs fonctionnalités principales :

* Gestion de l’inventaire alimentaire
* Gestion de la liste de courses
* Suggestions de recettes basées sur les ingrédients disponibles
* Conseils nutritionnels selon l’objectif de l’utilisateur
* Authentification et navigation sécurisée

## Architecture technique

### Frontend

* Framework : React avec TypeScript
* Build tool : Vite
* Routage : React Router
* Gestion d’état : Context API
* Requêtes HTTP : Axios
* Tests : Vitest + React Testing Library
* Linting : ESLint
* CI : GitHub Actions

### Backend

Un backend NestJS existe dans le repository, mais le projet peut fonctionner sans backend actif grâce à des données mockées.
Le frontend peut donc être lancé et testé de manière autonome.

## Fonctionnement sans backend

Oui, l’application peut être démarrée uniquement avec le frontend.

* Les appels API sont mockés
* Les données (produits, inventaire, commandes, authentification) sont simulées
* Cela permet au correcteur de lancer le projet sans configuration backend ni base de données

La vidéo de démonstration permet également de visualiser le comportement attendu si besoin.

## Expérience utilisateur (UX)

Plusieurs améliorations ont été apportées :

* États de chargement visibles lors des appels asynchrones
* Gestion claire des erreurs avec messages lisibles
* Navigation fiable entre les pages
* Pages vides explicites lorsque les données sont absentes
* Composants réutilisables et structure claire

## Notifications globales

Un mécanisme de notifications est présent dans le projet.
Certaines notifications (toasts/messages) existaient déjà, notamment pour :

* Les erreurs d’authentification
* Les échecs de chargement
* Les actions utilisateur invalides

Le principe de notifications globales a été compris et intégré dans le projet via des messages centralisés déclenchés lors de certaines actions critiques.

## Tests unitaires

Les tests unitaires sont obligatoires et ont été implémentés avec Vitest.

Tests couverts :

* Logique métier (cart, selectors, services)
* Composants React (rendu et comportement)
* Contexts (CartContext, AuthContext)

Les tests ne se limitent pas à « should render », ils vérifient des comportements réels.

Commande pour lancer les tests :

```bash
npm test
```

Commande utilisée en CI :

```bash
npm run test:ci
```

## Intégration Continue (CI)

Une GitHub Action est configurée dans `.github/workflows/ci.yml`.

Elle s’exécute automatiquement sur :

* Push sur la branche main
* Pull Request vers main

Étapes du pipeline :

* Installation des dépendances
* Lint du projet
* Exécution des tests unitaires
* Build du frontend

La CI échoue si l’une de ces étapes échoue.

## Installation et lancement du frontend

Prérequis :

* Node.js version 18 ou supérieure
* npm

Installation :

```bash
cd organisation-alimentaire-frontend
npm install
```

Lancement en mode développement :

```bash
npm run dev
```

Build du projet :

```bash
npm run build
```

Lint :

```bash
npm run lint
```

Tests :

```bash
npm test
```

## Comptes de test

Email : [test@yopmail.com](mailto:test@yopmail.com)
Mot de passe : azerty123

## Contenu livré

* Frontend fonctionnel
* Tests unitaires
* CI GitHub Actions opérationnelle
* Données mockées pour un fonctionnement autonome
* README détaillé
* Vidéo de démonstration fournie séparément

## Conclusion

Ce projet représente une version « production-ready » du front-end demandée dans l’exercice, dans la limite du temps disponible.
Les concepts essentiels ont été compris et appliqués : qualité du code, tests, CI, UX et structuration du projet.

Malgré les contraintes personnelles et professionnelles rencontrées, j’ai essayé de livrer un projet cohérent, fonctionnel et conforme aux attentes pédagogiques.

