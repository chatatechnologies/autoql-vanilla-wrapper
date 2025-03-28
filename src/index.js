import { configureTheme as configureThemeUtils } from 'react-autoql';

export const configureTheme = (customThemeConfig) => configureThemeUtils(customThemeConfig);
export { renderDataMessenger } from './wrappers/DataMessengerWrapper.js';
export { renderDashboard } from './wrappers/DashboardWrapper.js';
export { renderQueryOutput } from './wrappers/QueryOutputWrapper.js';
export { renderQueryInput } from './wrappers/QueryInputWrapper.js';
export { renderVizToolbar } from './wrappers/VizToolbarWrapper.js';
export { renderOptionsToolbar } from './wrappers/OptionsToolbarWrapper.js';

