# Mini-Projet
## Générateur dynamique de besoins journaliers en protéines
## 1. Présentation du projet

Ce projet consiste à développer une application web en React permettant de générer dynamiquement un tableau de besoins journaliers en protéines.

Les besoins en protéines sont calculés en fonction :

- du poids de l’utilisateur

- de l’objectif sportif sélectionné

- d’un intervalle de poids (minimum et maximum)

- du nombre de lignes à afficher

Les recommandations sont exprimées en grammes de protéines par kilogramme de poids corporel et par jour.

## 2. Objectifs pédagogiques

Ce projet permet de mettre en pratique :

- la création et la structuration de composants React

- la gestion de l’état avec useState

- l’optimisation des calculs avec useMemo

- le rendu conditionnel

- la validation des données utilisateur

- la séparation de la logique métier et de l’interface

- l’export de données au format CSV

## 3. Fonctionnalités implémentées

L’application permet :

- La sélection d’un ou plusieurs objectifs sportifs.

- La définition d’un poids minimum.

- La définition d’un poids maximum.

- Le choix du nombre de lignes à générer.

- La génération dynamique d’un tableau contenant :

-  une colonne "Poids (kg)"

-  une colonne par objectif sélectionné

-  une plage de besoins journaliers en grammes par jour

- La validation des champs :

-  valeurs positives

-  poids minimum strictement inférieur au poids maximum

-  nombre de lignes entier supérieur ou égal à 1

-  au moins un objectif sélectionné

- L’export du tableau généré au format CSV compatible avec Microsoft Excel.

## 4. Technologies utilisées

- React

- Vite

- JavaScript (ES6)

- CSS

## 5. Prérequis

Node.js : v24.11.1
npm : v11.7.0

Vérification des versions :

```bash
node -v
npm -v
```

## 6. Installation et lancement du projet

Cloner le dépôt :

```bash
git clone https://github.com/NeilPernon/Mini-Projet.git
```

Se placer dans le dossier du projet :

```bash
cd mini-projet
```

Installer les dépendances :

```bash
npm install
```

Lancer le serveur de développement :

```bash
npm run dev
```

Le projet doit être lancé depuis le dossier contenant le fichier package.json.

Ouvrir l’URL affichée dans le terminal (par exemple : http://localhost:5173).


## 7. Structure du projet

```
src/
├── components/
│ ├── Controls.jsx
│ ├── ProteinTable.jsx
│ ├── controls.css
│ └── table.css
│
├── utils/
│ ├── proteins.js
│ └── csv.js
│
├── App.jsx
├── App.css
├── index.css
└── main.jsx
```

components/ contient les composants d’interface utilisateur.

utils/ contient la logique métier et les fonctions d’export CSV.

App.jsx assure la gestion globale de l’état et l’orchestration.

index.css contient les styles globaux.

App.css contient les styles spécifiques à l’application.

## 8. Remarques techniques

Les calculs sont entièrement dynamiques et aucune valeur n’est écrite en dur.

Le projet est structuré afin de séparer la logique métier, l’interface utilisateur et les styles.

L’export CSV utilise un encodage UTF-8 avec BOM afin d’assurer la compatibilité avec Excel sous Windows.

Le dossier node_modules n’est pas inclus dans le dépôt et doit être généré via npm install.

## 9. Conclusion

Ce projet démontre la mise en œuvre des concepts fondamentaux de React ainsi qu’une organisation structurée du code en composants et modules utilitaires.
L’application est fonctionnelle, validée et respecte les contraintes techniques demandées.
Le projet respecte les contraintes suivantes : aucun calcul n’est écrit en dur, génération dynamique complète du tableau, validation des entrées et export des données.