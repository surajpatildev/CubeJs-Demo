# cubejs-analytics

## Prerequisites

1. Install NodeJS (preferably using [nvm](https://github.com/nvm-sh/nvm)). CubeJS can work with latest NodeJS Version. At the time of POC, NodeJS `v14.4.0` is used.
1. With NodeJS, `npm` and `npx` are installed automatically which we will be using next.
1. Install yarn
   ```bash
    npm install --global yarn
    ```

## Getting Started

### Start CubeJS Server and Developer Playground

1. Change Directory to `cubejs`
1. Install required packages `yarn`
1. Update the `.env` file based on which database you want to connect to.
   1. If you are a backend developer most likely you will be pointing to the local database since you will be playing with schema and data.
   1. If you are a frontend developer you can use Heroku Database where data is already populated, and you will mostly be using the playground app to grab JSON Queries and ReactJS Code.
1. Start Playground `yarn run dev`
1. Open `http://localhost:4000/` to access Playground

### Start Dashboard Application

**Update .env**
- Enable envioronment variable in the .env file, based on which CubeJS Server you want to connect.

## Dynamic Dashboard

With Dynamic Dashboard we can create new charts on the fly and save the updated dashboard. 

1. Change Directory to `cubejs-analytics/dashboard-app `
1. Install required packages `yarn`
1. Update the `.env.development` file.
1. Start Playground `yarn start`
1. Open `http://localhost:3000/` to access Dashboard Application

## Static Dashboard

A separate dashboard to demonstrate drill-down feature.

1. Change Directory to `cubejs-analytics/dashboard-app-drilldown`
1. Install required packages `yarn`
1. Start Playground `yarn start`
1. Open `http://localhost:3000/` to access Dashboard Application
