# autoql-vanilla-wrapper

`autoql-vanilla-wrapper` is a lightweight wrapper around the [react-autoql](https://www.npmjs.com/package/react-autoql) library. It allows you to integrate the powerful **DataMessenger** component into **vanilla JavaScript** applications without requiring a React setup. This package is ideal for users looking to embed **react-autoql**'s functionality into existing projects without migrating to React.

---

## Features

- Seamlessly integrate `react-autoql` components into vanilla JavaScript apps.
- Use the powerful **DataMessenger** component with minimal setup.
- Fully supports **themes** and customization via `autoqlThemeObject`.

---

## Installation

To use this package, you need to have Node.js and npm installed. Then, install the package via:

```bash
npm install autoql-vanilla-wrapper
```

## Usage 

## DataMessenger Wrapper

## 1. Import the DataMessenger Wrapper in Your Vanilla JavaScript Application

```js
import { renderDataMessenger } from 'autoql-vanilla-wrapper';
```

## 2. Add a Target Container in Your HTML
```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>autoql-vanilla-wrapper DataMessenger Example</title>
  </head>
  <body>
    <div id="data-messenger-container"></div>
    <script type="module" src="./index.js"></script>
  </body>
</html>
```

## 3. Render the DataMessenger

In your JavaScript file (e.g., index.js), use the renderDataMessenger function to initialize and render the DataMessenger.

```js
import { renderDataMessenger } from 'autoql-vanilla-wrapper';

// Define configuration and options
const autoqlConfig = {
  targetElementId: 'data-messenger-container', // The HTML element where DataMessenger will render
  authentication: {
    token: 'YOUR_API_TOKEN_HERE',
    domain: 'https://your-api-domain.com',
    apiKey: 'YOUR_API_KEY',
  },
};

// Render the DataMessenger
const dataMessengerRef = renderDataMessenger(autoqlConfig);

// Optionally interact with the dataMessengerRef to control the component programmatically
dataMessengerRef.current?.openDrawer();
```

## Props for `renderDataMessenger`

### Required Props

| Name              | Type     | Description                                                                 |
|-------------------|----------|-----------------------------------------------------------------------------|
| `targetElementId` | `string` | The ID of the DOM element where the DataMessenger will be mounted.          |
| `authentication`  | `object` | Contains `token` and `domain` required to authenticate with `react-autoql`. |


## Example
Here's an example of a complete setup:

```html 
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>autoql-vanilla-wrapper DataMessenger Example</title>
  </head>
  <body>
    <h1>DataMessenger Example</h1>
    <div id="data-messenger-container"></div>
    <script type="module">
      import { renderDataMessenger } from 'autoql-vanilla-wrapper';

      const autoqlConfig = {
        targetElementId: 'data-messenger-container',
        authentication: {
          token: 'YOUR_API_TOKEN_HERE',
          domain: 'https://your-api-domain.com',
          apiKey: 'YOUR_API_KEY',
        },
      };

      renderDataMessenger(autoqlConfig);
    </script>
  </body>
</html>
```

## Dashboard Wrapper

## 1. Import the Dashboard Wrapper in Your Vanilla JavaScript Application

```js
import { renderDashboard } from 'autoql-vanilla-wrapper';
```

## 2. Add a Target Container in Your HTML
```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>autoql-vanilla-wrapper Dashboard Example</title>
  </head>
  <body>
    <div id="dashboard-container"></div>
    <script type="module" src="./index.js"></script>
  </body>
</html>
```

## 3. Render the DataMessenger

In your JavaScript file (e.g., index.js), use the renderDashboard function to initialize and render the Dashboard.

```js
import { renderDashboard } from 'autoql-vanilla-wrapper';

// Define configuration and options
const autoqlConfig = {
  targetElementId: 'dashboard-container', // The HTML element where Dashboard will render
  authentication: {
    token: 'YOUR_API_TOKEN_HERE',
    domain: 'https://your-api-domain.com',
    apiKey: 'YOUR_API_KEY',
  },
  dashboardTiles: [], // Array of dashboard tiles 
};

// Render the Dashboard
const dashboardRef = renderDashboard(autoqlConfig);

// Optionally interact with the dashboardRef to control the component programmatically
dashboardRef.current?.executeDashboard();
```

## Props for `renderDashboard`

### Required Props

| Name              | Type     | Description                                                                 |
|-------------------|----------|-----------------------------------------------------------------------------|
| `targetElementId` | `string` | The ID of the DOM element where the DataMessenger will be mounted.          |
| `authentication`  | `object` | Contains `token` and `domain` required to authenticate with `react-autoql`. |
| `dashboardTiles`  | `array`  | Array of dashboard tiles fetched from AutoQL API.                           |


## Example
Here's an example of a complete setup:

```html 
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>autoql-vanilla-wrapper Dashboard Example</title>
  </head>
  <body>
    <h1>Dashboard Example</h1>
    <div id="dashboard-container"></div>
    <script type="module">
      import { renderDashboard } from 'autoql-vanilla-wrapper';

      const autoqlConfig = {
        targetElementId: 'data-messenger-container',
        authentication: {
          token: 'YOUR_API_TOKEN_HERE',
          domain: 'https://your-api-domain.com',
          apiKey: 'YOUR_API_KEY',
        },
        dashboardTiles: []
      };

      renderDashboard(autoqlConfig);
    </script>
  </body>
</html>
```

## License

This package is licensed under the ISC License.

## Support

If you have any questions or need help, feel free to open an issue in this repository or contact us directly.

Happy coding!