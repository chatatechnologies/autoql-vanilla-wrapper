import React from 'react';
import ReactDOM from 'react-dom';
import { VizToolbar } from 'react-autoql';
import 'react-autoql/dist/autoql.esm.css'

const VizToolbarWrapper = ({ vizToolbarRef, ...props }) => {

  return (
    <VizToolbar
      ref={vizToolbarRef}
      responseRef={responseRef}
      {...props}
    />
  );
};

export function renderVizToolbar(props = {}) {
  const container = document.getElementById(props.targetElementId);

  if (!container) {
    console.error('VizToolbar target container not found!');
    return;
  }

  const vizToolbarRef = React.createRef();
  ReactDOM.render(<VizToolbarWrapper vizToolbarRef={vizToolbarRef} {...props} />, container);
  return vizToolbarRef;
};
