import '../src/vendor/fonts/stylesheet.scss';
import '../src/utils/variables/global.scss';
/** @type { import('@storybook/react').Preview } */
const preview = {
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      matchers: {
       color: /(background|color)$/i,
       date: /Date$/i,
      },
    },
    backgrounds: {
      default: 'main',
      values: [
        {
          name: 'main',
          value: '#f0ece2',
        },
      ],
    },
  },
};

export default preview;