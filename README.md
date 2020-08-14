# Data Catalog App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

This is a REACT frontend designed to utilize the latest stable version of [DKAN 2.x](https://github.com/GetDKAN/dkan) as a backend.

This application serves as a starter app, or example of how to use the [data-catalog-components](https://github.com/GetDKAN/data-catalog-components) library to easily create open data catalogs.

## Auto Set Up
1) Follow the [DKAN Tools](https://github.com/GetDKAN/dkan-tools) README to stand up the backend. Include the `--demo` flag to have the frontend installed and example pages built as well.

## Manual Set Up
If you have a backend already running and just need the frontend:

1) Clone this repository in your **docroot** ``git clone https://github.com/GetDKAN/data-catalog-react.git frontend``. The DKAN Tools library is structured to run commands in a folder named `frontend` so frontend repos could be swapped if needed.
1) Install the dependencies with [npm](https://www.npmjs.com/):
   1) ``cd frontend``
   1) ``npm install`` or ``yarn install``
1) Run the server: ``npm start`` or ``yarn start``
   1) Your site is now running at ``http://localhost:3000``
1) Build the public files ``npm run build``

## Structure of the app

This is meant to be a blueprint for your frontend, from which you can make minor color and logo changes or major component or page layout customizations.

    ├── cypress           # Integration tests
    ├── build             # The output of the build process
    ├── public            # The base files that the app builds with, like `index.html`
    ├── src               # This directory will contain all of the source code
    |   ├── assets        # Place to store images and content/config files
    |   ├── components    # Configure your page structure with the layout component
    │   ├── pages         # Components in this directory become pages automatically with paths based on their file name
    │   ├── services      # Provides the connections to the backend api
    |   └── templates     # Ideas for how to assemble components to display the data
    │   └── theme         # Add custom fonts, colors, and css here
    ├── package.json      # App dependencies

## Basic Customizations

- Edit the `src/assets/config.json` file to change the site title, slogan, logo, and container class.
- Edit the `src/theme/styles/_variables.scss` file to change the colors and fonts of your site.
- Add custom .scss files to `src/theme/styles/` to override the default css classes with your new color variables and other changes.
- Import your .scss files to `src/theme/styles/index.scss`

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `yarn build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify
