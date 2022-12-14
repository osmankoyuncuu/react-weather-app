## Animation of the Website

![image](./weather-app.gif)

## Description

Project aims to create a weather app.

## Project Skeleton

    react-weather-app
    |
    ├── public
    │     └── favicon.ico
    │     └── index.html
    ├── src
    │    ├── assets
    │    │       └── weather-logo.gif
    │    ├── component
    │    │    ├── Detail.jsx
    │    │    ├── Footer.jsx
    │    │    ├── Form.jsx
    │    │    └── Navbar.jsx
    │    ├── context
    │    │    ├── DetailContext.jsx
    │    │    ├── GetWeatherContext.jsx
    │    │    └── SearchTextContext.jsx
    │    ├── pages
    │    │    ├── CityList.jsx
    │    │    ├── Home.jsx
    │    │    ├── Map.jsx
    │    │    └── NotFound.jsx
    │    ├── router
    │    │    └── AppRouter.jsx
    │    ├── Styles
    │    │    ├── CityList.styled.jsx
    │    │    ├── Detail.styled.jsx
    │    │    ├── FixDiv.styled.jsx
    │    │    ├── Flex.styled.jsx
    │    │    ├── Footer.styled.jsx
    │    │    ├── Form.styled.jsx
    │    │    ├── Global.styled.jsx
    │    │    ├── Map.styled.jsx
    │    │    ├── Navbar.styled.jsx
    │    │    ├── NotFound.styled.jsx
    │    │    └── theme.styled.jsx
    │    ├── App.css
    │    ├── App.js
    │    ├── index.css
    │    └── index.js
    ├── .gitignore
    ├── package.json
    ├── README.md
    ├── weather-app.gif
    └── yarn.lock

## Overview

I mastered Js, React and Styled Component a features in this project. You can see the visual representation of the website above.

## Turkey Map

## Installation

```javascript
npm install turkey-map-react
```

or

```javascript
yarn add turkey-map-react
```

## Usage

### Importing (ES6)

```javascript
import TurkeyMap from "turkey-map-react";
```

### Basic usage with defaults

```javascript
<TurkeyMap />
```

### Handling events

On click example:

```javascript
<TurkeyMap
  onClick={({ plateNumber, name }) =>
    console.log(plateNumber + " - " + name + " is just clicked!")
  }
/>
```

On mouse over example:

```javascript
<TurkeyMap
  hoverable={true}
  onHover={({ plateNumber, name }) =>
    console.log("Cursor is over on " + plateNumber + " - " + name + "!")
  }
/>
```

### City component wrapping

```javascript
const renderCity = (cityComponent, cityData) => (
  <Tooltip title={cityData.name} key={cityData.id}>
    {cityComponent}
  </Tooltip>
);

<TurkeyMap cityWrapper={renderCity} />;
```

# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `yarn build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
