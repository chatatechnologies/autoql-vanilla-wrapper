import React from 'react';
import ReactDOM from 'react-dom';
import { DataMessenger, configureTheme } from 'react-autoql';
import 'react-autoql/dist/autoql.esm.css'

const DataMessengerWrapper = ({ dmRef, autoqlThemeObject = {}, ...props }) => {
  if (autoqlThemeObject) {
    configureTheme({
      theme: autoqlThemeObject?.theme ?? 'light',
      fontFamily: autoqlThemeObject?.font ?? '',
      accentColor: autoqlThemeObject?.accentColor ?? '#26A7Df',
      accentColorSecondary: autoqlThemeObject?.accentColorSecondary ?? '',
      chartColors: autoqlThemeObject?.chartColors ?? ['#26A7E9', '#A5CD39', '#DD6A6A', '#FFA700', '#00C1B2'],
      textColor: autoqlThemeObject?.textColor ?? '',
      accentTextColor: autoqlThemeObject?.accentTextColor ?? '',
      dashboardTitleColor: autoqlThemeObject?.dashboardTitleColor ?? '',
      backgroundColorPrimary: autoqlThemeObject?.backgroundColorPrimary ?? '',
      backgroundColorSecondary: autoqlThemeObject?.backgroundColorSecondary ?? '',
    });
  }

  return (
    <DataMessenger
      ref={dmRef}
      {...props}
    />
  );
};

export function renderDataMessenger(props = {}) {
  const container = document.getElementById(props.targetElementId);

  if (!container) {
    console.error('Target container not found!');
    return;
  }

  const dmRef = React.createRef();
  ReactDOM.render(<DataMessengerWrapper dmRef={dmRef} {...props} />, container);
  return dmRef;
};
