import * as React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import useMediaQuery from '@mui/material/useMediaQuery';
import SvgIcon from '@mui/material/SvgIcon';
import { Sorting } from '../../images/Sorting';

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 220,
      backgroundColor: 'var(--color-background-color)',
      borderRadius: '0 0 12px 12px',
      boxShadow: '8px 8px 30px 6px rgba(214, 212, 209, 0.6)',
    },
  },
};

function CustomSvgIcon() {
  return (
    <SvgIcon
      data-testid="ArrowDropDownIcon"
      aria-hidden="true"
      focusable="false"
    >
      <path d="M16 10L11.875 14L8 10" stroke="#247251" fill="none" strokeWidth="1.5" />
    </SvgIcon>
  );
}

export const SelectFieldSingle = ({
  placeholder, values, selectValue, setSelectValue,
}) => {
  const matches = useMediaQuery('(min-width:1100px)');
  const handleChange = (event) => {
    setSelectValue(event.target.value);
  };

  return (
    <FormControl
      sx={{
        margin: '0 0 6px 0',
        width: 220,
      }}
      size={matches ? 'medium' : 'small'}
    >
      <InputLabel
        sx={{
          top: '-4px',
          '&.MuiInputLabel-root': {
            fontFamily: 'var(--font-primary)',
            fontWeight: '500',
            fontSize: '17px',
            lineHeight: '135%',
            color: 'var(--color-black)',
          },
        }}
        id="demo-simple-select-label"
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
          <Sorting />
          <div>{placeholder}</div>
        </div>
      </InputLabel>
      <Select
        sx={{
          backgroundColor: 'var(--color-background-color)',
          borderRadius: '14px',
          color: 'var(--text-color)',
          '.MuiOutlinedInput-notchedOutline': {
            borderColor: 'var(--color-green-accent)',
          },
          '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
            borderColor: 'var(--color-green-accent)',
            fontSize: '17px',
          },
          '&:hover .MuiOutlinedInput-notchedOutline': {
            // borderColor: 'yellow',
            border: '2px solid var(--color-green-accent)',
          },
          '&:hover .MuiOutlinedInput-input': {
            color: 'var(--text-color)',
          },
          '.MuiSvgIcon-root': {
            position: 'absolute',
            right: '7px',
            pointerEvents: 'none',
            transition: 'rotate 200ms cubic-bezier(0.4, 0, 0.2, 1) 0ms',
          },
          '&.Mui-focused .MuiSvgIcon-root': {
            rotate: '180deg',
          },
        }}
        labelId="demo-simple-select-label"
        id="demo-simple-select"
        value={selectValue}
        label={(
          <div style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
            <Sorting />
            <div>{placeholder}</div>
          </div>
        )}
        onChange={handleChange}
        IconComponent={CustomSvgIcon}
        MenuProps={MenuProps}
      >
        {values.map((element) => (
          <MenuItem
            sx={{
              '&.Mui-selected': {
                backgroundColor: 'var(--color-background-color)',
                '&:hover': {
                  backgroundColor: 'var(--color-green-grey-light)',
                },
              },
              '&:hover': {
                backgroundColor: 'var(--color-green-grey-light)',
              },
            }}
            key={element.slug}
            value={element.slug}
          >
            {element.name}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};
