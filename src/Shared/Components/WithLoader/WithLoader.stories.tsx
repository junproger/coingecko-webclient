import React from 'react';

import { WithLoaderProps } from "./propsWithLoader";
import { WithLoader } from './WithLoader';

export default {
  title: 'WithLoader',
  component: WithLoader,
  args: {
    children: ''
  }
};

export const Default = (props: WithLoaderProps) => (
  <WithLoader {...props} />
);
