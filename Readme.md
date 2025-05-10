# FULL STACK CRUD

## Describtion
Création d'une application web de gestion de produits avec authentification des utilisateurs.

## 🧑 Utilisateur
- Peut s'inscrire et se connecter
- A un compte personnel sécurisé (authentifié via JWT)
- Ne voit que ses propres produits

## 📦 Produit (objet métier)
- id (auto-incrément)
- name (nom du produit)
- description (texte libre)
- price (nombre décimal)
- createdAt, updatedAt (timestamps automatiques)
- userId (clé étrangère vers l'utilisateur)

## 🔧 Fonctionnalités
- 🔐 Authentification (inscription + connexion avec JWT)
- 📝 CRUD produit:
    - Créer un nouveau produit
    - Lire la liste des produits d’un utilisateur
    - Mettre à jour un produit existant
    - Supprimer un produit

## 🛠️ Stack technique :
- Backend : Node.js + Express + PostgreSQL + Sequelize
- Frontend : React.js
- Auth : JWT (JSON Web Token)

## Installation et Utilisation
1) Cloner le répertoire:
```
git clone https://github.com/seydi-ahmed/fullstack-crud-app.git
cd fullstack-crud-app
```
2) Ouvrir 2 terminals
- terminal 1:
    - cd backend
    - npm start
- terminal 2:
    - cd frontend
    - export NODE_OPTIONS=--openssl-legacy-provider
    - npm start


## Base de données
```
CREATE USER crud_user WITH PASSWORD 'crud_password';
CREATE DATABASE crud_app OWNER crud_user;
GRANT ALL PRIVILEGES ON DATABASE crud_app TO crud_user;
```

## Structure du projet:
```
.
├── backend
│   ├── config
│   │   ├── auth.config.js
│   │   └── db.config.js
│   ├── controllers
│   │   ├── auth.controller.js
│   │   └── products.controller.js
│   ├── middlewares
│   │   └── authJwt.js
│   ├── models
│   │   ├── index.js
│   │   ├── product.model.js
│   │   └── user.model.js
│   ├── package.json
│   ├── package-lock.json
│   ├── routes
│   │   ├── auth.routes.js
│   │   └── product.routes.js
│   └── server.js
├── frontend
│   ├── package.json
│   ├── package-lock.json
│   ├── public
│   │   ├── favicon.ico
│   │   ├── index.html
│   │   ├── logo192.png
│   │   ├── logo512.png
│   │   ├── manifest.json
│   │   └── robots.txt
│   ├── README.md
│   └── src
│       ├── App.css
│       ├── App.js
│       ├── App.test.js
│       ├── components
│       │   ├── auth
│       │   │   ├── Login.js
│       │   │   └── Register.js
│       │   ├── Navbar.js
│       │   ├── PrivateRoute.js
│       │   └── products
│       │       ├── ProductForm.js
│       │       ├── ProductItem.js
│       │       └── ProductList.js
│       ├── index.css
│       ├── index.js
│       ├── logo.svg
│       ├── reportWebVitals.js
│       ├── services
│       │   ├── auth.service.js
│       │   └── product.service.js
│       └── setupTests.js
├── push.sh
├── Readme.md
```

## Test pour le backend
| Requête                    | Headers nécessaires               |
|----------------------------|-----------------------------------|
| POST /api/auth/signup      | Aucun                            |
| POST /api/auth/signin      | Aucun                            |
| POST /api/products         | x-access-token: \<ton_token\>    |
| GET /api/products          | x-access-token: \<ton_token\>    |
| GET /api/products/:id      | x-access-token: \<ton_token\>    |
| PUT /api/products/:id      | x-access-token: \<ton_token\>    |
| DELETE /api/products/:id   | x-access-token: \<ton_token\>    |

## Boulot pour le frontend
### 🧩 1. Connexion à l’API depuis le frontend (React)
1) auth.service.js : pour gérer login/register
2) product.service.js : pour appeler les routes /api/products

### 🖼️ 2. Composants UI
1) 🔐 Auth :
- Register.js : formulaire d’inscription
- Login.js : formulaire de connexion

### 📦 Produits :
1) ProductList.js : liste les produits
2) ProductForm.js : ajout ou modification
3) ProductItem.js : un produit affiché
4) PrivateRoute.js : route protégée si non connecté

### 🧠 3. Stocker le token côté client
1) Quand l’utilisateur se connecte :
- Sauvegarder le accessToken (dans localStorage)
- L’utiliser dans toutes les requêtes via Axios

### 🔐 4. Protéger les pages (PrivateRoute)
1) Seules les personnes connectées peuvent:
- Voir les produits
- Créer/modifier/supprimer un produit

### 🌍 5. Navigation (Navbar.js)
1) Afficher :
- Login/Register si non connecté
- Produits/Logout si connecté

### ✅ 6. Test complet du frontend
1) Créer un compte
- Se connecter
- Ajouter, afficher, modifier, supprimer un produit