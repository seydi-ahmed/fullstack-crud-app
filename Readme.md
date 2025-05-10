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