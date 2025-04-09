import React from 'react';
import ReactDOM from 'react-dom';
import { NotificationIcon } from 'react-autoql';

const NotificationIconWrapper = ({ notificationIconRef, ...props }) => {

  return (
    <NotificationIcon
      ref={notificationIconRef}
      {...props}
    />
  );
};

export function renderNotificationIcon(props = {}) {
  const container = document.getElementById(props.targetElementId);

  if (!container) {
    console.error('NotificationIcon target container not found!');
    return;
  }

  const notificationIconRef = React.createRef();
  ReactDOM.render(<NotificationIconWrapper notificationIconRef={notificationIconRef} {...props} />, container);
  return notificationIconRef;
};
