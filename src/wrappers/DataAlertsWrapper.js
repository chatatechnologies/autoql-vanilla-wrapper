import React from 'react';
import ReactDOM from 'react-dom';
import { DataAlerts } from 'react-autoql';

const DataAlertsWrapper = ({ dataAlertsRef, ...props }) => {

  return (
    <DataAlerts
      ref={dataAlertsRef}
      {...props}
    />
  );
};

export function renderDataAlerts(props = {}) {
  const container = document.getElementById(props.targetElementId);

  if (!container) {
    console.error('DataAlerts target container not found!');
    return;
  }

  const dataAlertsRef = React.createRef();
  ReactDOM.render(<DataAlertsWrapper dataAlertsRef={dataAlertsRef} {...props} />, container);
  return dataAlertsRef;
};
