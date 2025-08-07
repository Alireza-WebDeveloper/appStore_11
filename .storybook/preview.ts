/** @type { import('@storybook/react').Preview } */
import '../app/globals.css';

import { withThemeByDataAttribute } from '@storybook/addon-themes';

const preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
  decorators: [
    withThemeByDataAttribute({
      defaultTheme: 'light',
      themes: {
        light: 'light',
        dark: 'dark',
      },
    }),
  ],
  tags: ['autodocs'],
};

export default preview;
