import React from 'react';
import ReactDOM from 'react-dom';
import { QueryOutput } from 'react-autoql';
import 'react-autoql/dist/autoql.esm.css'

const QueryOutputWrapper = ({ queryOutputRef, ...props }) => {

  return (
    <QueryOutput
      ref={queryOutputRef}
      {...props}
    />
  );
};

export function renderQueryOutput(props = {}) {
  const container = document.getElementById(props.targetElementId);

  if (!container) {
    console.error('QueryOutput target container not found!');
    return;
  }

  const queryOutputRef = React.createRef();
  ReactDOM.render(<QueryOutputWrapper queryOutputRef={queryOutputRef} {...props} />, container);
  return queryOutputRef;
};
