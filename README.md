# awesome-products
Store your products and get them direct from the browser!

[![JavaScript Style Guide](https://cdn.rawgit.com/standard/standard/master/badge.svg)](https://github.com/standard/standard)

[![jest](https://facebook.github.io/jest/img/jest-badge.svg)](https://github.com/facebook/jest)

## We use the standard styleguide, for code checking run the following code below

```
npm run lint
```

## Getting started

### With nodeJs:
Install [nodeJs](http://nodejs.org/en/download/) on your local machine

**Install all the dependencies:**
```
npm install
```

**Run the server:**
```
npm start
```

### With docker:
Install [docker](https://www.docker.com/get-docker/) on your local machine

**Build the app image:**
```
docker image build -t awesome-products .
```

**Run an app container:**
```
docker container run -dp 3000:80 --name products awesome-products
```

The app will be available at **http://localhost:3000**

## Running the tests

```
npm test
```

**With watch mode**

```
npm run test:watch
```

## Generating the bundle

```
npm run build
```

**To generate in development mode:**

```
npm run build:dev
```

# Tools
- React
- React router
- Webpack and Webpack devServer
- Bootstrap 4
- AntD for the menu component
- Babel for transpile the code to ES5
- Jest e enzyme for automated tests
- Nginx for serve the static files on the docker image
