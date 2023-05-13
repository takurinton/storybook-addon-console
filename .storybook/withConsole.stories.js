/* eslint-disable no-console */

import React from 'react';
import { setConsoleOptions } from '../src';
import { Button, Badge } from './Component';

export default {
  title: 'With Console',
  component: Button,
  args: {},
};

export const WithLog = {
  render: () =>
    setConsoleOptions(() => (
      <Button onClick={() => console.log('Data:', 1, 3, 4)}>Log Button</Button>
    )),
};

export const WithWarning = {
  render: () =>
    setConsoleOptions(() => (
      <Button onClick={() => console.warn('Data:', 1, 3, 4)}>Warn Button</Button>
    )),
};

export const WithError = {
  render: () =>
    setConsoleOptions(() => (
      <Button onClick={() => console.error('Test Error')}>Error Button</Button>
    )),
};

export const WithUncatchedError = {
  render: () =>
    setConsoleOptions(() => (
      <Button onClick={() => console.log('Data:', T.buu.foo)}>Throw Button</Button>
    )),
};

export const WithLogInConstructor = {
  render: () => setConsoleOptions(() => <Badge info={42} />),
};

export const WithWrongPropType = {
  render: () => setConsoleOptions(() => <Badge info="Component with React Warning" />),
};
