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

## 1. Import the Wrapper in Your Vanilla JavaScript Application

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
    <title>autoql-vanilla-wrapper Example</title>
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
const appRef = renderDataMessenger(autoqlConfig);

// Optionally interact with the appRef to control the component programmatically
appRef.current?.openDrawer();
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
    <title>autoql-vanilla-wrapper Example</title>
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

## License

This package is licensed under the ISC License.

## Support

If you have any questions or need help, feel free to open an issue in this repository or contact us directly.

Happy coding!