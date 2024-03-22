import React from 'react';
import { CourseCard } from './CourseCard';
import ImageSample from '../../images/dali_storybook.png';
import cls from './CourseCard.module.scss';

const customViewports = {
  breakpointLarge: {
    name: 'Breakpoint Large',
    styles: {
      width: '1500px',
      height: '500px',
    },
  },
  breakpointTablet: {
    name: 'Breakpoint Tablet',
    styles: {
      width: '730px',
      height: '500px',
    },
  },
  breakpointSmall: {
    name: 'Breakpoint small',
    styles: {
      width: '365px',
      height: '750px',
    },
  },
};

const handleEnroll = () => {
  // eslint-disable-next-line no-alert
  alert('Обработчик кнопки записи на курс');
};
const handleGetMore = () => {
  // eslint-disable-next-line no-alert
  alert('Обработчик кнопки узнать подробнее');
};

const mockObject = {
  id: 1,
  title: 'Однодневный курс по Римской мозаике',
  slug: 'start',
  max_guests: 15,
  duration: 5,
  short_description: `На мастер классе вы научитесь основам римской мозаики, которые были заложены мастерами античности.
  За день вы погрузитесь в процесс от создания эскиза до монтажа, овладеете инструментами для колки камня,
  а также создадите собственную работу 15 на 15 см.`,
  full_description: 'Полное описание в формате markdown',
  image: ImageSample,
  masterclasses: [
    {
      id: 2,
      title: 'Однодневный курс по Римской мозаике в неудобное время',
      price: 13000,
      currency: '₸',
      time_start: '2024-03-16T12:05:25+05:00',
      time_end: '2024-03-16T12:05:25+05:00',
      num_of_guests: 2,
    },
    {
      id: 2,
      title: 'Однодневный курс по Римской мозаике вечером',
      price: 15000,
      currency: '₽',
      time_start: '2024-03-06T00:32:01+05:00',
      time_end: '2024-03-06T00:32:01+05:00',
      num_of_guests: 2,
    },
  ],
};

/**
 * Карточка курсов, для правильного отображения адаптивной верстки перейдите по вкладке в навигационном меню слева
*/
export default {
  title: 'UI-kit/CourseCard',
  component: CourseCard,
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
    item: {
      type: 'object',
      description: 'Объект данных карточки.',
      required: true,
    },
  },
};

export const CourseCardLarge = {
  parameters: {
    viewport: {
      defaultViewport: 'breakpointLarge',
    },
  },
  args: {
    item: mockObject,
    handleEnroll,
    handleGetMore,
  },
};

export const CourseCardTablet = {
  parameters: {
    viewport: {
      defaultViewport: 'breakpointTablet',
    },
  },
  args: {
    item: mockObject,
    handleEnroll,
    handleGetMore,
  },
};

export const CourseCardSmall = {
  parameters: {
    viewport: {
      defaultViewport: 'breakpointSmall',
    },
  },
  args: {
    item: mockObject,
    handleEnroll,
    handleGetMore,
  },
};
