import { useState } from 'react';
import * as React from 'react';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import ListItemText from '@mui/material/ListItemText';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import Checkbox from '@mui/material/Checkbox';
import SvgIcon from '@mui/material/SvgIcon';
import { classNames } from '../../helpers/classNames';
import cls from './SelectField.module.scss';

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

export const SelectField = ({ placeholder, valuesArray }) => {
  const [selectValue, setSelectValue] = useState([]);
  const handleChange = (event) => {
    const {
      target: { value },
    } = event;
    setSelectValue(
      // On autofill we get a stringified value.
      typeof value === 'string' ? value.split(',') : value,
    );
  };
  return (
    <FormControl sx={{
      margin: '0 0 6px 0',
      width: 220,
      height: '52px',
    }}
    >
      <InputLabel
        sx={{
          '&.MuiInputLabel-root': {
            fontFamily: 'var(--font-primary)',
            fontWeight: '500',
            fontSize: '17px',
            lineHeight: '135%',
            color: 'var(--color-black)',
          },
        }}
        id="demo-multiple-checkbox-label"
      >
        {placeholder}
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
            borderColor: 'yellow',
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
        className={cls.globalSelect}
        labelId="demo-multiple-checkbox-label"
        id="demo-multiple-checkbox"
        multiple
        value={selectValue}
        onChange={handleChange}
        IconComponent={CustomSvgIcon}
        input={(
          <OutlinedInput
            sx={{
            }}
            label={placeholder}
          />
        )}
        renderValue={(selected) => selected.join(', ')}
        MenuProps={MenuProps}
      >
        {valuesArray.map((name) => (
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
            key={name}
            value={name}
          >
            <Checkbox
              sx={{
                color: 'var(--color-green-accent)',
                '&.Mui-checked': {
                  color: 'var(--color-green-accent)',
                },
              }}
              checked={selectValue.indexOf(name) > -1}
            />
            <ListItemText primary={name} />
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};