import { configureTheme as configureThemeUtils } from 'react-autoql';

export { renderDataMessenger } from './wrappers/DataMessengerWrapper.js';
export const configureTheme = (customThemeConfig) => configureThemeUtils(customThemeConfig);
