import React from 'react';
import { ButtonReset } from './ButtonReset';

const customViewports = {
  breakpointIpadMini: {
    name: 'Breakpoint ipad mini',
    styles: {
      width: '720px',
      height: '200px',
    },
  },
};

export default {
  title: 'UI-kit/ButtonReset',
  component: ButtonReset,
  parameters: {
    layout: 'centered',
    viewport: {
      viewports: {
        ...customViewports,
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    placeholder: {
      type: 'string',
      name: 'label',
      description: 'Текст внутри кнопки',
    },
    disabled: {
      type: { name: 'boolean' },
      description: 'Отключение действия кнопки',
      table: {
        type: { summary: ['true', 'false'] },
        defaultValue: { summary: 'false' },
      },
      options: ['false', 'true'],
    },
  },
};

export const ButtonResetDefault = {
  args: {
    placeholder: 'Нажми на меня',
  },
};

export const DisabledButtonReset = {
  args: {
    placeholder: 'Нажми на меня',
    disabled: true,
  },
};

/**
 * Для правильного отображения адаптивной верстки перейдите по вкладке в навигационном меню слева
 */
export const ButtonResetDefaultMobile = {
  parameters: {
    viewport: {
      defaultViewport: 'breakpointIpadMini',
    },
  },
  args: {
    placeholder: 'Нажми на меня',
  },
};
