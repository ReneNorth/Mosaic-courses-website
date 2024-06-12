import React from 'react';
import { SelectField } from './SelectField';
import cls from './SelectField.module.scss';

/**
 * Компонент библиотеки MUI Select стилизованный согласно дизайн системы проекта
*/
export default {
  title: 'UI-kit/SelectField',
  component: SelectField,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    placeholder: {
      type: 'string',
      description: 'Заполнитель для поля ввода данных.',
      control: 'text',
      table: {
        defaultValue: { summary: 'Placeholder' },
      },
      required: true,
    },
    values: {
      type: 'array',
      description: 'Массив данных выпадающего списка.',
      required: true,
    },
  },
};

export function SelectFieldDefault(args) {
  return (
    <SelectField {...args} />
  );
}

SelectFieldDefault.args = {
  placeholder: 'Placeholder',
  values: ['Select#1', 'Select#2', 'Select#3'],
};
