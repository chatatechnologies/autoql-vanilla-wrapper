import React from 'react';
import ReactDOM from 'react-dom';
import { NotificationFeed } from 'react-autoql';

const NotificationFeedWrapper = ({ notificationFeedRef, ...props }) => {

  return (
    <NotificationFeed
      ref={notificationFeedRef}
      {...props}
    />
  );
};

export function renderNotificationFeed(props = {}) {
  const container = document.getElementById(props.targetElementId);

  if (!container) {
    console.error('NotificationFeed target container not found!');
    return;
  }

  const notificationFeedRef = React.createRef();
  ReactDOM.render(<NotificationFeedWrapper notificationFeedRef={notificationFeedRef} {...props} />, container);
  return notificationFeedRef;
};
