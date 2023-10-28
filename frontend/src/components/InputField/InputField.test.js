/* eslint-disable react-hooks/rules-of-hooks */
import React, { useCallback, useState } from 'react';
import renderer from 'react-test-renderer';
import useFormValidation from '../../hooks/useFormValidation';

import { InputField } from './InputField';

const {
  errors, isValid, handleChange, values,
} = useFormValidation();

it('The input field is rendered without errors', () => {
  const tree = renderer
    .create(<InputField type="name" errors={errors} isValid={isValid} handleChange={handleChange} values={values} />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
