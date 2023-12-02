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
    decoration: {
      type: 'string',
      description: 'Цвет заднего контура',
      control: 'radio',
      options: ['black', 'white', null],
      table: {
        type: { summary: ['black', 'white', 'null'] },
        defaultValue: { summary: 'null' },
      },
    },
    className: {
      type: 'string',
      description: 'Состояние заливки кнопки',
      control: 'radio',
      options: ['fill', 'outline'],
      table: {
        type: { summary: ['fill', 'outline'] },
        defaultValue: { summary: 'fill' },
      },
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
    children: {
      type: 'string',
      name: 'label',
      description: 'Текст внутри кнопки',
    },
    type: {
      type: 'string',
      description: 'Тип кнопки',
      options: ['button', 'submit'],
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'button' },
      },
      control: {
        type: 'radio',
      },
    },
  },
};

export const FieldButtonWithoutDecoration = {
  args: {
    children: 'Нажми на меня',
    className: 'fill',
  },
};

export const FieldButtonWithDecoration = {
  args: {
    children: 'Нажми на меня',
    className: 'fill',
    decoration: 'black',
  },
};

export const OutlineButton = {
  args: {
    children: 'Нажми на меня',
    className: 'outline',
  },
};

export const DisabledButton = {
  args: {
    children: 'Нажми на меня',
    className: 'fill',
    disabled: true,
  },
};
