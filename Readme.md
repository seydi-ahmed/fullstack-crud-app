# FULL STACK CRUD

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

## Structure du projet:
```
.
├── backend
│   ├── config
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
│   ├── node_modules (trop de fichiers pour les afficher ici)
│   ├── package.json
│   ├── package-lock.json
│   ├── routes
│   │   ├── auth.routes.js
│   │   └── product.routes.js
│   └── server.js
├── frontend
│   ├── node_modules (trop de fichiers pour les afficher ici)
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
│       ├── index.css
│       ├── index.js
│       ├── logo.svg
│       ├── reportWebVitals.js
│       ├── services
│       └── setupTests.js
├── push.sh
└── Readme.md
```