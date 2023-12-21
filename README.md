# Currency Exchange

Ce projet est une application de conversion de devises utilisant l'API ExchangeRate.

## Prérequis

- Docker
- Une clé API de [ExchangeRate-API](https://www.exchangerate-api.com/)

## Configuration

1. Clonez ce dépôt sur votre machine locale.

```bash
git clone <url-du-depot>
```

2. Naviguez vers le répertoire du projet.

```bash
cd currencyExchange
yarn install
```

3. Créez un fichier <span style="color:yellow">.env</span> à la racine du projet. Ajoutez votre clé API ExchangeRate-API à ce fichier.

```bash
echo "VITE_API_KEY=<API_KEY_FROM_EXCHANGE_RATE_API>" > .env
```

Remplacez  <span style="color:yellow"><votre-cle-api></span> par votre clé API ExchangeRate-API.

## Démarrage du projet

Utilisez docker-compose.

```bash
docker-compose up --build -d
```

L'application devrait maintenant être accessible à l'adresse http://localhost:8000.

## Scripts NPM

+ <span style="color:yellow">yarn dev</span> : Compile et recharge à chaud pour le développement
+ <span style="color:yellow">yarn lint</span> : Lint avec ESLint

