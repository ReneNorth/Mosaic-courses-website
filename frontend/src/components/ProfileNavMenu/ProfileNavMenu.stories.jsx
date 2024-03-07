import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import { ProfileNavMenu } from './ProfileNavMenu';

export default {
  title: 'Components/ProfileNavMenu',
  component: ProfileNavMenu,
  parameters: {
    docs: {
      description: {
        component: `Компонент Profile NavMenu используется для навигации по настройкам 
        профиля личного кабинета`,
      },
    },
    layout: 'centered',
  },
  tags: ['autodocs'],
};

const Template = () => (
  <MemoryRouter>
    <ProfileNavMenu />
  </MemoryRouter>
);

export const Default = Template.bind({});
Default.args = {};
