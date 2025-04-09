import React from 'react';
import ReactDOM from 'react-dom';
import { DataAlertModal } from 'react-autoql';
import 'react-autoql/dist/autoql.esm.css'

const DataAlertsModalWrapper = ({ dataAlertsModalRef, ...props }) => {

  return (
    <DataAlertModal
      ref={dataAlertsModalRef}
      {...props}
    />
  );
};

export function renderDataAlertsModal(props = {}) {
  const container = document.getElementById(props.targetElementId);

  if (!container) {
    console.error('DataAlertsModal target container not found!');
    return;
  }

  const dataAlertsModalRef = React.createRef();
  ReactDOM.render(<DataAlertsModalWrapper dataAlertsModalRef={dataAlertsModalRef} {...props} />, container);
  return dataAlertsModalRef;
};
