import { useState, useEffect } from 'react';
import * as React from 'react';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import ListItemText from '@mui/material/ListItemText';
import Select from '@mui/material/Select';
import Checkbox from '@mui/material/Checkbox';
import SvgIcon from '@mui/material/SvgIcon';
import useMediaQuery from '@mui/material/useMediaQuery';

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

export const SelectField = ({
  placeholder,
  values,
  setActiveSelectors,
  resetValue,
}) => {
  const matches = useMediaQuery('(min-width:1100px)');
  const [selectValue, setSelectValue] = useState([]);

  const handleChange = (event) => {
    const {
      target: { value },
    } = event;

    const slugs = {};

    values.forEach((filterElement) => {
      slugs[`${filterElement.slug}`] = false;
      for (let i = 0; i < value.length; i += 1) {
        if (filterElement.name === value[i]) {
          slugs[`${filterElement.slug}`] = true;
        }
      }
    });

    setActiveSelectors(slugs);
    setSelectValue(
      // On autofill we get a stringified value.
      typeof value === 'string' ? value.split(',') : value,
    );
  };

  useEffect(() => {
    setSelectValue([]);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [resetValue]);
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
          '&.MuiInputLabel-root': {
            fontFamily: 'var(--font-primary), sans-serif',
            fontWeight: '500',
            fontSize: '17px',
            lineHeight: '135%',
            color: 'var(--color-black)',
            marginLeft: '-3px',
          },
        }}
        id="demo-multiple-checkbox-label"
      >
        {placeholder}
      </InputLabel>
      <Select
        sx={{
          fontFamily: 'var(--font-primary), sans-serif',
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
        {values.map((element) => (
          <MenuItem
            sx={{
              '& .MuiTypography-root': {
                fontFamily: 'var(--font-primary), sans-serif',
              },
              fontFamily: 'var(--font-primary), sans-serif',
              '&.Mui-selected': {
                fontFamily: 'var(--font-primary), sans-serif',
                backgroundColor: 'var(--color-background-color)',
                '&:hover': {
                  backgroundColor: 'var(--color-green-grey-light)',
                },
              },
              '&:hover': {
                backgroundColor: 'var(--color-green-grey-light)',
              },
            }}
            key={element.name}
            value={element.name}
          >
            <Checkbox
              sx={{
                color: 'var(--color-green-accent)',
                '&.Mui-checked': {
                  color: 'var(--color-green-accent)',
                },
                '&:hover': {
                  backgroundColor: 'var(--color-green-grey-light)',
                },
              }}
              checked={selectValue.indexOf(element.name) > -1}
            />
            <ListItemText
              primary={element.name}
            />
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};
