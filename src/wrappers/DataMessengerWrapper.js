import React from 'react';
import ReactDOM from 'react-dom';
import { DataMessenger } from 'react-autoql';

const DataMessengerWrapper = ({ dmRef, ...props }) => {

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
    console.error('DataMessenger target container not found!');
    return;
  }

  const dmRef = React.createRef();
  ReactDOM.render(<DataMessengerWrapper dmRef={dmRef} {...props} />, container);
  return dmRef;
};
