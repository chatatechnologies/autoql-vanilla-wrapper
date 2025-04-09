import React from 'react';
import ReactDOM from 'react-dom';
import { QueryInput } from 'react-autoql';

const QueryInputWrapper = ({ queryInputRef, ...props }) => {

  return (
    <QueryInput
      ref={queryInputRef}
      {...props}
    />
  );
};

export function renderQueryInput(props = {}) {
  const container = document.getElementById(props.targetElementId);

  if (!container) {
    console.error('QueryInput target container not found!');
    return;
  }

  const queryInputRef = React.createRef();
  ReactDOM.render(<QueryInputWrapper queryInputRef={queryInputRef} {...props} />, container);
  return queryInputRef;
};
