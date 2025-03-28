# autoql-vanilla-wrapper

`autoql-vanilla-wrapper` is a lightweight wrapper around the [react-autoql](https://www.npmjs.com/package/react-autoql) library. It enables seamless integration of **react-autoql** components into **vanilla JavaScript** environments without requiring a React setup. This is ideal for embedding conversational data experiences into existing non-React applications.

---

## 🚀 Features

- Use powerful components like **DataMessenger**, **Dashboards**, **Query Input**, **Query Output**, **VizToolbar**, and **OptionsToolbar** in plain JavaScript.
- Supports theming and easy customization via `configureTheme`.
- Minimal setup, flexible integration.
- Supports all props and callbacks from the original react-autoql components.
---

## 📦 Installation

Install the package using npm:

```bash
npm install autoql-vanilla-wrapper
```

---

## 📚 Usage

### 1. Import Components

```js
import {
  renderDataMessenger,
  renderDashboard,
  renderQueryInput,
  renderQueryOutput,
  renderVizToolbar,
  renderOptionsToolbar,
  configureTheme,
} from 'autoql-vanilla-wrapper'; || 'https://cdn.chata.io/autoql-vanilla-wrapper/vX.Y.Z/autoql-vanilla-wrapper.esm.js';
```

### 2. Set Up Authentication

All components require authentication:

```js
const authentication = {
  token: 'YOUR_API_TOKEN_HERE',
  domain: 'https://your-api-domain.com',
  apiKey: 'YOUR_API_KEY',
};
```

---

## 🧩 Component Functions

### `renderDataMessenger`

Mounts the DataMessenger drawer in a target element.

```js
renderDataMessenger({
  authentication,
  targetElementId: 'data-messenger-container',
});
```

### `renderDashboard`

Mounts a dashboard using a list of tiles.

```js
renderDashboard({
  authentication,
  dashboardTiles: [], // array of dashboard tile configs
  targetElementId: 'dashboard-container',
});
```

### `renderQueryInput`

Renders a query input component for users to enter natural language questions.

```js
renderQueryInput({
  authentication,
  targetElementId: 'query-input-container',
  onResponseCallback: (response) => {
    // handle the AutoQL response
  },
});
```

### `renderQueryOutput`

Renders the output of a query response (charts, tables, summaries, etc.).

```js
renderQueryOutput({
  authentication,
  targetElementId: 'output-container',
  queryResponse: responseObject,
  queryInputRef, // optional, for linking inputs to outputs
});
```

### `renderVizToolbar`

Adds a visualization toolbar (table/chart toggle) to an existing query output component.

```js
renderVizToolbar({
  responseRef: queryOutputRef.current,
  targetElementId: 'toolbar-container',
});
```

### `renderOptionsToolbar`

Renders an options toolbar with settings (export, filter, etc.) for a query output.

```js
renderOptionsToolbar({
  responseRef: queryOutputRef.current,
  targetElementId: 'options-toolbar-container',
});
```

### `configureTheme`

Apply a custom theme to all components globally.

```js
configureTheme({
  primaryColor: '#003366',
  fontFamily: 'Arial, sans-serif',
});
```

---

## 🔐 Required Authentication Fields

All components require the following `authentication` object:

| Field     | Type     | Description                        |
|-----------|----------|------------------------------------|
| `token`   | string   | AutoQL user token                  |
| `domain`  | string   | AutoQL domain (e.g., yourcompany.com) |
| `apiKey`  | string   | API key tied to your domain        |

---

## 📄 License

This package is licensed under the ISC License.

---

## 🛟 Support

For questions, issues, or feature requests, please open an issue on the GitHub repo or contact the development team.

Happy building!
