import MyThemeProvider from '../src/theme/MyThemeProvider';

export const decorators = [
  Story => (
    <MyThemeProvider>
      <Story />
    </MyThemeProvider>
  ),
];

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    expanded: true,
  },
};
