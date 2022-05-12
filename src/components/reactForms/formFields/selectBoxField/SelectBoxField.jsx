import Selectbox from '@UI/selectbox/Selectbox';
import Typography from '@UI/typography/Typography';
import { func, string } from 'prop-types';
import { Field } from 'react-final-form';
import styles from './SelectBoxField.module.scss';

/**
 * SelectField Component
 * @param {string} name - Name for selectbox
 * @param {function} onChange - On Change callback
 * @param {function} validate - Validation functions
 * @returns {*}
 * @constructor
 */
const SelectField = ({ name, validate, onChange, ...restProps }) => {
  return (
    <Field name={name} validate={validate}>
      {({ input, meta }) => (
        <div>
          <Selectbox
            {...input}
            {...restProps}
            className={meta.touched && meta.error ? styles.error : ''}
            handleOnChange={(value) => {
              onChange?.(value);
              input?.onChange(value);
            }}
          />
          {meta.touched && meta.error && (
            <Typography variant="label" theme="error">
              *{meta.error}
            </Typography>
          )}
        </div>
      )}
    </Field>
  );
};

SelectField.propTypes = {
  name: string.isRequired,
  onChange: func,
  validate: func,
};

export default SelectField;
