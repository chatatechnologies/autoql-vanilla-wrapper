import React from 'react';
import ReactDOM from 'react-dom';
import { ChatContent } from 'react-autoql';

const ChatContentWrapper = ({ chatContentRef, ...props }) => {

  return (
    <ChatContent
      ref={chatContentRef}
      {...props}
    />
  );
};

export function renderChatContent(props = {}) {
  const container = document.getElementById(props.targetElementId);

  if (!container) {
    console.error('ChatContent target container not found!');
    return;
  }

  const chatContentRef = React.createRef();
  ReactDOM.render(<ChatContentWrapper chatContentRef={chatContentRef} {...props} />, container);
  return chatContentRef;
};
