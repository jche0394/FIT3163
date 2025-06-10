# F1 Dashboard

This project is a React based dashboard that visualises Formula 1 data such as Elo rankings and simple race predictions. It was bootstrapped with [Create React App](https://github.com/facebook/create-react-app) and uses TailwindCSS for styling.

## Requirements

* Node.js 18 or later
* npm

Install dependencies with:

```bash
npm install
```

## Running the development server

```bash
npm start
```

The app will be available at `http://localhost:3000`.

## Testing

Tests can be run with:

```bash
CI=true npm test --silent --scripts-prepend-node-path
```

## Project structure

The main pages can be found in `src/pages`:

* **DashboardPage** – overview of recent statistics
* **PredictionsPage** – placeholder predictions of qualifying and race results
* **RankingsPage** – displays driver and constructor Elo rankings
* **ComparePage** – compare two drivers or constructors side by side

These pages use reusable components in `src/components`.

This repository currently contains mocked data only. Integrating real F1 APIs and backend services is outside the scope of this template.
