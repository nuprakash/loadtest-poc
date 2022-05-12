import RadioButton from '@UI/radioButton/RadioButton';
import Typography from '@UI/typography/Typography';
import { func, string } from 'prop-types';
import { Field } from 'react-final-form';
import styles from './RadioField.module.scss';

/**
 * SelectField Component
 * @param {string} name - Name for selectbox
 * @param {function} onChange - On Change callback
 * @param {function} validate - Validation functions
 * @returns {*}
 * @constructor
 */
const RadioField = ({ name, validate, onChange, ...restProps }) => {
  return (
    <Field name={name} validate={validate}>
      {({ input, meta }) => (
        <div>
          <RadioButton
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

RadioField.propTypes = {
  name: string.isRequired,
  onChange: func,
  validate: func,
};

export default RadioField;
