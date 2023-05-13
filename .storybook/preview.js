import * as React from 'react';

export const decorators = [Story => <Story />];

const preview = {
  parameters: {
    backgrounds: {
      default: 'default',
      values: [
        {
          default: true,
          value: '#e7e2f3',
          name: 'default',
        },
      ],
    },
  },
};

export default preview;
