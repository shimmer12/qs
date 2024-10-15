import React from 'react';
import Status from './Status';
import Priority from './Priority';
import Byuser from './Byuser';

const Content = ({ grouping, order }) => {
  let content;

  if (grouping === 'status') {
    content = <Status order={order} />;
  } else if (grouping === 'priority') {
    content = <Priority order={order} />;
  } else {
    content = <Byuser order={order} />;
  }

  return <>{content}</>;
};

export default Content;
