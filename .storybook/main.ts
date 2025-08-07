/** @type { import('@storybook/nextjs').StorybookConfig } */
const config = {
  stories: [
    '../app/**/*.stories.@(js|jsx|mjs|ts|tsx)',
    '../app/**/*.mdx',
    '../stories/**/*.mdx',
    '../stories/**/*.stories.@(js|jsx|mjs|ts|tsx)',
  ],
  addons: [
    '@storybook/addon-essentials',
    '@storybook/addon-onboarding',
    '@chromatic-com/storybook',
    '@storybook/addon-actions',
    '@storybook/experimental-addon-test',
    '@storybook/addon-docs',
    'storybook-addon-description',
    '@storybook/addon-themes',
    '@@storybook/addon-actions',
    '@storybook/blocks',
  ],
  docs: {
    defaultName: 'Documentation',
  },
  framework: {
    name: '@storybook/experimental-nextjs-vite',
    options: {},
  },
  staticDirs: ['..\\public'],
};
export default config;
