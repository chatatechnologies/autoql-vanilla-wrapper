# autoql-vanilla-wrapper

`autoql-vanilla-wrapper` is a lightweight wrapper around the [react-autoql](https://www.npmjs.com/package/react-autoql) library. It enables seamless integration of **react-autoql** components into **vanilla JavaScript** environments without requiring a React setup. This is ideal for embedding conversational data experiences into existing non-React applications.

---

## 🚀 Features

- Use powerful components like **DataMessenger**, **Dashboards**, **Data Alerts**, **Data Alerts Modal**, **Chat Content**,**Query Input**, **Query Output**, **VizToolbar**, and **OptionsToolbar** in plain JavaScript.
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
import 'autoql-vanilla-wrapper/styles.css';
import {
  renderDataMessenger,
  renderDashboard,
  renderDataAlerts,
  renderDataAlertsModal,
  renderChatContent,
  renderQueryInput,
  renderQueryOutput,
  renderVizToolbar,
  renderOptionsToolbar,
  configureTheme,
} from 'autoql-vanilla-wrapper'; || 'https://cdn.chata.io/autoql-vanilla-wrapper/vX.Y.Z/autoql-vanilla-wrapper.esm.js';
```

For non-bundled environments (e.g. script/CDN usage), load the stylesheet explicitly:

```html
<link rel="stylesheet" href="https://cdn.chata.io/autoql-vanilla-wrapper/vX.Y.Z/autoql-vanilla-wrapper.css" />
```

Load this stylesheet after framework/global CSS (Bootstrap, Tailwind, Blazor site CSS) so widget rules are not overridden.

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

### `renderDataAlerts`

Mounts the DataAlerts container in a target element.

```js
renderDataAlerts({
  authentication,
  targetElementId: 'data-alerts-container',
});
```

### `renderDataAlertsModel`

Mounts the DataAlertsModal in a target element.

```js
renderDataAlertsModal({
  authentication,
  targetElementId: 'data-alerts-modal-container',
  isVisible: true,
  onClose: () => {
    // handle modal close
  }
});
```

### `renderChatContent`

Mounts the Chat Content in a target element. This component implements the QueryInput and QueryOutput components in a simple, bare-bones container.

```js
renderChatContent({
  authentication,
  targetElementId: 'chat-content-container',
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
