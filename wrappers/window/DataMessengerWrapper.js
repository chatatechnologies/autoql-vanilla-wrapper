import React from 'react';
import ReactDOM from 'react-dom';
import { DataMessenger } from 'react-autoql';
import 'react-autoql/dist/autoql.esm.css'

const App = (props) => {
  const dataMessengerRef = React.useRef()

  React.useEffect(() => {
    if (dataMessengerRef.current) {
      window.dataMessengerRef = dataMessengerRef.current; // Expose ref to window for JS access
    }

    return () => {
      // Clean up the ref when the component is unmounted
      delete window.dataMessengerRef;
    };
  }, [dataMessengerRef]);

  return (
    <DataMessenger
      ref={dataMessengerRef}
      {...props}
    />
  )
}

window.renderAutoQLDataMessenger = (props) => {
  ReactDOM.render(
    <App
      {...props}
    />,
    document.getElementById(props.targetElementId) // Pass target element ID for mounting
  );
};
