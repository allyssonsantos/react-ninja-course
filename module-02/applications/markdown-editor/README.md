# ReactJS Boilerplate

## Made with

* Webpack 2+
* Babel
* React hot loader
* Jest for tests and Chai for assertions
* Storybook to create components stories
* Async/await
* Dynamic `import()` function
* Webpack tree shaking

## Dependencies:

- Node.js `>=` v6;

## Up and running

- Clone this repository: `git clone git@github.com:allyssonsantos/react-boilerplate.git`;
- Remove `.git` directory;
- Install dependencies: `yarn` (or `npm i`);
- Run `yarn dev` (or `npm start`) to develop on `http://localhost:4000`
- Run `yarn build` (or `npm run build`) for production build (files will be generated on `dist` directory)

## Scripts

- `yarn dev (or npm run dev)`: Starts the application on development mode
- `yarn test (or npm test)`: Run tests once
- `yarn build (or npm run build)`: Build project to production
- `yarn storybook (or npm run storybook)`: Run Storybook on `6006` port
- `yarn storybook:build`: Build Storybook to static files
- `yarn start (or npm start)`: Special script reserved to run production code. Change as you wish. For now, it is the same as `yarn dev`.
