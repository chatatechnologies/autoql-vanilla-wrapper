import React from 'react';
import ReactDOM from 'react-dom';
import { OptionsToolbar } from 'react-autoql';

const OptionsToolbarWrapper = ({ optionsToolbarRef, responseRef, ...props }) => {

  return (
    <OptionsToolbar
      ref={optionsToolbarRef}
      responseRef={responseRef}
      {...props}
    />
  );
};

export function renderOptionsToolbar(props = {}) {
  const container = document.getElementById(props.targetElementId);

  if (!container) {
    console.error('OptionsToolbar target container not found!');
    return;
  }

  const optionsToolbarRef = React.createRef();
  ReactDOM.render(<OptionsToolbarWrapper optionsToolbarRef={optionsToolbarRef} {...props} />, container);
  return optionsToolbarRef;
};
