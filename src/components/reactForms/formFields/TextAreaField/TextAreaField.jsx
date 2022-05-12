import { string, func } from 'prop-types';
import { Field } from 'react-final-form';
import TextArea from '@UI/textArea/TextArea';
import Typography from '@UI/typography/Typography';
import styles from './TextAreaField.module.scss';

/**
 * TextAreaField Component
 * @param {object} textAreaProps - Props for the fields
 * @param {string} className - Class name to override styles
 * @param {function} validate - Validation functions
 * @returns {*}
 * @constructor
 */

const TextAreaField = ({ name, validate, className, ...restProps }) => {
  return (
    <Field name={name} validate={validate}>
      {({ input, meta }) => (
        <div className={`${className} ${meta.error ? styles.error : ''}`}>
          <TextArea {...input} {...restProps} />
          {meta.error && (
            <Typography variant="label" theme="error">
              *{meta.error}
            </Typography>
          )}
        </div>
      )}
    </Field>
  );
};

TextAreaField.propTypes = {
  className: string,
  name: string.isRequired,
  validate: func,
};

TextAreaField.defaultProps = {
  className: '',
  validate: null,
};

export default TextAreaField;
