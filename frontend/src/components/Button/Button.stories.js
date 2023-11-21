import React from 'react';

import { Button } from './Button';

export default {
  title: 'UI-kit/Button',
  component: Button,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    decoration: { control: 'radio', options: ['black', 'white', null] },
    className: { control: 'radio', options: ['fill', 'outline'] },
  },
};

export const MainButton = {
  args: {
    decoration: 'black',
    className: 'fill',
    disabled: false,
    children: 'Нажми на меня!',
  },
};
