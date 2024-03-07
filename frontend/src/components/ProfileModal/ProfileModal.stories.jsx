import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import { ProfileModal } from './ProfileModal';
import cls from './ProfileModal.module.scss';

export default {
  title: 'UI-kit/ProfileModal',
  component: ProfileModal,
  parameters: {
    docs: {
      description: {
        component: `Компонент ProfileModal является модальным окном
         и используется для навигации по страницам личного кабинета`,
      },
    },
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    isOpen: {
      type: 'boolean',
      description: 'Состояние модального окна - открыто/закрыто',
      options: [true, false],
      table: {
        type: { summary: [true, false] },
        defaultValue: { summary: true },
      },
      control: 'boolean',
    },
    setIsOpen: {
      type: 'function',
      description: 'Функция сеттер для обновления состояния модального окна',
    },
  },
};

export function DefaultProfileModal(args) {
  return (
    <MemoryRouter>
      <div className={cls.storybookWrapper}>
        <ProfileModal {...args} />
      </div>
    </MemoryRouter>
  );
}

DefaultProfileModal.args = {
  isOpen: true,
  setIsOpen: () => ({}),
};
