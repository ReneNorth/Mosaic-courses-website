import React, { useState } from 'react';
import { SwitchButton } from './SwitchButton';

export default {
  title: 'UI-kit/SwitchButton',
  component: SwitchButton,
  parameters: {
    docs: {
      description: {
        component: `для более корректного отображения, переключение параметра в документации
        не изменяет состояние переключателя, состояние изменяется только при клике на переключатель`,
      },
    },
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    isOn: {
      type: 'boolean',
      description: 'Состояние переключателя - вкл/выкл',
      options: [true, false],
      table: {
        type: { summary: [true, false] },
        defaultValue: { summary: true },
      },
      control: 'boolean',
    },
    handleToggle: {
      type: 'function',
      description: 'Функция сеттер для обновления состояния переключателя',
    },
  },
};

export function DefaultSwitchButton() {
  const [state, setstate] = useState(true);
  return (
    <SwitchButton
      isOn={state}
      handleToggle={() => setstate(!state)}
    />
  );
}
