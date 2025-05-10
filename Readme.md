# 🚀 FULL STACK CRUD APP

Cette application web permet la gestion sécurisée de produits avec authentification des utilisateurs. Chaque utilisateur a son propre espace pour créer, lire, modifier et supprimer ses produits.

> Réalisée par **Mouhamed Diouf** – Développeur Full Stack  
> 📧 seydiahmedelcheikh@gmail.com  
> 📞 +221 776221681  
> 🔗 [LinkedIn](https://www.linkedin.com/in/mouhamed-diouf-435207174)  
> 🧠 GitHub : [https://github.com/seydi-ahmed/fullstack-crud-app](https://github.com/seydi-ahmed/fullstack-crud-app)

---

## 📦 Fonctionnalités

- Authentification JWT : Inscription, Connexion sécurisée
- Chaque utilisateur gère ses propres produits
- CRUD Produit : Créer, Lire, Modifier, Supprimer
- Stockage du token dans localStorage
- Routage protégé (PrivateRoute)
- Frontend en React + Backend Express + PostgreSQL

---

## 🛠️ Stack technique

- **Frontend** : React.js
- **Backend** : Node.js + Express
- **Base de données** : PostgreSQL + Sequelize ORM
- **Authentification** : JSON Web Token (JWT)

---

## ⚙️ Installation

```bash
git clone https://github.com/seydi-ahmed/fullstack-crud-app.git
cd fullstack-crud-app
npm install
npm start
```
- suivre les étapes


---

## 📂 Structure du projet

```bash
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
├── package.json
├── package-lock.json
├── push.sh (pour pousser le répertoire de maniére automatique)
├── READ.MD
└── Readme.md

```

## Test pour le backend (avec Postman)
| Requête                    | Headers nécessaires               |
|----------------------------|-----------------------------------|
| POST /api/auth/signup      | Aucun                            |
| POST /api/auth/signin      | Aucun                            |
| POST /api/products         | x-access-token: \<ton_token\>    |
| GET /api/products          | x-access-token: \<ton_token\>    |
| GET /api/products/:id      | x-access-token: \<ton_token\>    |
| PUT /api/products/:id      | x-access-token: \<ton_token\>    |
| DELETE /api/products/:id   | x-access-token: \<ton_token\>    |


---

## Boulot pour le frontend
### 🧩 1. Connexion à l’API depuis le frontend (React)
1) auth.service.js : pour gérer login/register
2) product.service.js : pour appeler les routes /api/products

### 🖼️ 2. Composants UI
- 🔐 Auth :
    - Register.js : formulaire d’inscription
    - Login.js : formulaire de connexion

### 📦 Produits :
1) ProductList.js : liste les produits
2) ProductForm.js : ajout ou modification
3) ProductItem.js : un produit affiché
4) PrivateRoute.js : route protégée si non connecté

### 🧠 3. Stocker le token côté client
- Quand l’utilisateur se connecte :
    - Sauvegarder le accessToken (dans localStorage)
    - L’utiliser dans toutes les requêtes via Axios

### 🔐 4. Protéger les pages (PrivateRoute)
- Seules les personnes connectées peuvent:
    - Voir les produits
    - Créer/modifier/supprimer un produit

### 🌍 5. Navigation (Navbar.js)
- Afficher :
    - Login/Register si non connecté
    - Produits/Logout si connecté

### ✅ 6. Test complet du frontend
- Créer un compte
    - Se connecter
    - Ajouter, afficher, modifier, supprimer un produit

---