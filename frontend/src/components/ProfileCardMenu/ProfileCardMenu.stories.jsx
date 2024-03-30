import React from 'react';
import { ProfileCardMenu } from './ProfileCardMenu';
import UserbarProfile from '../../images/UserbarProfile';
import cls from './ProfileCardMenu.module.scss';

export default {
  title: 'UI-kit/ProfileCardMenu',
  component: ProfileCardMenu,
  parameters: {
    docs: {
      description: {
        component: 'Карточки меню для страницы `/profile`',
      },
    },
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    cardIcon: {
      control: 'text',
      description: 'Иконка для отображения переданная в формате компонента `.jsx`',
    },
    cardTitle: {
      type: 'string',
      description: 'Заголовок карточки',
      control: 'text',
    },
    cardText: {
      type: 'string',
      description: 'Текст внутри карточки',
      control: 'text',
    },
  },
};

export function DefaultProfileCardMenu(args) {
  return (
    <div className={cls.storyWrapper}>
      <ProfileCardMenu {...args} />
    </div>
  );
}

DefaultProfileCardMenu.args = {
  cardIcon: <UserbarProfile />,
  cardTitle: 'Card',
  cardText: 'Text',
};
