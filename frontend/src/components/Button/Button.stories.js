import React from 'react';
import { Button } from './Button';
import cls from './Button.module.scss';

const customViewports = {
  breakpointIpadMini: {
    name: 'Breakpoint ipad mini',
    styles: {
      width: '720px',
      height: '300px',
    },
  },
};

export default {
  title: 'UI-kit/Button',
  component: Button,
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
    fill: {
      type: { name: 'boolean' },
      description: 'Заполнение кнопкой размеров обертки',
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

/**
 * Для правильного отображения адаптивной верстки перейдите по вкладке в навигационном меню слева
 */
export const ButtonDefaultMobile = {
  parameters: {
    viewport: {
      defaultViewport: 'breakpointIpadMini',
    },
  },
  args: {
    children: 'Нажми на меня',
    className: 'fill',
  },
};

/**
 * Размер обертки равен 400px - кнопка принимает его width
 */
export function FillButton(args) {
  return (
    <div className={cls.buttonStoryWrapper}>
      <Button
        {...args}
      />
    </div>
  );
}

FillButton.args = {
  children: 'Нажми на меня',
  className: 'fill',
  fill: true,
};
