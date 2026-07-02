# Referee API

API de gestion des arbitres, des matchs et de leurs affectations.

## Stack technique

- **Runtime** : Node.js (ES Modules)
- **Framework** : Express
- **ORM** : Sequelize
- **Base de données** : PostgreSQL

## Structure du projet

```
├── config/
│   └── database.js           # Connexion Sequelize à PostgreSQL
├── models/
│   ├── index.js              # Initialisation + associations
│   ├── arbitre.model.js      # Modèle Arbitre (PK)
│   ├── match.model.js        # Modèle Match (PK)
│   └── affectation.model.js  # Modèle Affectation (FK arbitreId, matchId)
├── controllers/
│   ├── arbitre.controller.js
│   ├── match.controller.js
│   └── affectation.controller.js
├── routes/
│   ├── arbitre.routes.js
│   ├── match.routes.js
│   └── affectation.routes.js
├── middlewares/
│   ├── logger.middleware.js   # Journalisation des requêtes
│   ├── validate.middleware.js # Validation des données entrantes
│   └── error.middleware.js    # Gestion centralisée des erreurs
├── server.js
├── package.json
└── README.md
```

## Modèles

### Arbitre
| Champ             | Type          | Contraintes            |
|-------------------|---------------|------------------------|
| id                | UUID (PK)     | Auto-généré            |
| nom               | STRING(100)   | Requis                 |
| prenom            | STRING(100)   | Requis                 |
| nationalite       | STRING(50)    | Requis                 |
| dateNaissance     | DATEONLY      | Optionnel              |
| categorie         | ENUM          | international / national / regional |
| experienceAnnees  | INTEGER       | Défaut: 0              |

### Match
| Champ            | Type          | Contraintes                  |
|------------------|---------------|------------------------------|
| id               | UUID (PK)     | Auto-généré                  |
| equipeDomicile   | STRING(150)   | Requis                       |
| equipeExterieur  | STRING(150)   | Requis                       |
| dateMatch        | DATE          | Requis                       |
| lieu             | STRING(200)   | Requis                       |
| statut           | ENUM          | programme / en_cours / termine / reporte |
| scoreDomicile    | INTEGER       | Optionnel                    |
| scoreExterieur   | INTEGER       | Optionnel                    |

### Affectation
| Champ           | Type      | Contraintes                           |
|-----------------|-----------|---------------------------------------|
| id              | UUID (PK) | Auto-généré                           |
| arbitreId       | UUID (FK) | Requis, référence → arbitres          |
| matchId         | UUID (FK) | Requis, référence → matchs            |
| role            | ENUM      | principal / assistant / arbitre_video |
| dateAffectation | DATE      | Défaut: maintenant                    |

**Index unique** : (arbitreId, matchId, role)

## Installation

```bash
# Installer les dépendances
npm install

# Configurer les variables d'environnement
export DB_NAME=referee_db
export DB_USER=postgres
export DB_PASSWORD=postgres
export DB_HOST=localhost
export DB_PORT=5432

# Démarrer le serveur
npm start         # ou : npm run dev (mode watch)
```

## API Endpoints

### Arbitres
| Méthode | Chemin              | Description              |
|---------|---------------------|--------------------------|
| GET     | /api/arbitres       | Liste tous les arbitres  |
| GET     | /api/arbitres/:id   | Détail d'un arbitre      |
| POST    | /api/arbitres       | Créer un arbitre         |
| PUT     | /api/arbitres/:id   | Mettre à jour un arbitre |
| DELETE  | /api/arbitres/:id   | Supprimer un arbitre     |

### Matchs
| Méthode | Chemin            | Description            |
|---------|-------------------|------------------------|
| GET     | /api/matchs       | Liste tous les matchs  |
| GET     | /api/matchs/:id   | Détail d'un match      |
| POST    | /api/matchs       | Créer un match         |
| PUT     | /api/matchs/:id   | Mettre à jour un match |
| DELETE  | /api/matchs/:id   | Supprimer un match     |

### Affectations
| Méthode | Chemin                  | Description                |
|---------|-------------------------|----------------------------|
| GET     | /api/affectations       | Liste toutes les affectations |
| GET     | /api/affectations/:id   | Détail d'une affectation   |
| POST    | /api/affectations       | Créer une affectation      |
| PUT     | /api/affectations/:id   | Mettre à jour une affectation |
| DELETE  | /api/affectations/:id   | Supprimer une affectation  |
