import React from 'react';
import { SelectFieldSingle } from './SelectFieldSingle';

/**
 * Компонент библиотеки MUI Select стилизованный согласно дизайн системы проекта под сортировку
*/
export default {
  title: 'UI-kit/SelectFieldSingle',
  component: SelectFieldSingle,
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
    valuesArray: {
      type: 'array',
      description: 'Массив данных выпадающего списка.',
      required: true,
    },
  },
};

export function SelectFieldSingleDefault(args) {
  return (
    <SelectFieldSingle {...args} />
  );
}

SelectFieldSingleDefault.args = {
  placeholder: 'Placeholder',
  valuesArray: [
    { name: 'Без фильтра', value: '' },
    { name: 'Select#1', value: 'Select#1' },
    { name: 'Select#2', value: 'Select#2' },
    { name: 'Select#3', value: 'Select#3' },
  ],
};
