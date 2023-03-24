import React from 'react';
import { themes } from '@storybook/theming';
import MyThemeProvider from '../src/theme/MyThemeProvider';
import { addDecorator } from '@storybook/react';

export const decorators = [
  Story => (
    <MyThemeProvider>
      <Story />
    </MyThemeProvider>
  ),
];

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  docs: {
    theme: themes.normal,
  },
  controls: {
    expanded: true,
  },
};
