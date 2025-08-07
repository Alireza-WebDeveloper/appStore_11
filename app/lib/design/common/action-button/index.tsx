import React from 'react';
import { Props } from './index.types';

const ActionButton: React.FC<Props> = ({ children }) => {
  return <button>{children}</button>;
};

export default ActionButton;
