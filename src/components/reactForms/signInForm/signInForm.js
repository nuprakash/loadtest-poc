import InputField from '@Components/reactForms/formFields/inputField/InputField';
import { Form } from 'react-final-form';
import Button from '@UI/button/Button';
import { Row, Col } from '@UI/layout';
import FieldValidator, { email } from '../helpers/FieldValidator';
import styles from './signInForm.module.scss';

/**
 * SignInForm Component
 * @returns {*}
 * @constructor
 */
const SignInForm = () => {
  const onSubmit = async (values) => {
    console.log('submitted', values);
  };

  return (
    <Form
      onSubmit={onSubmit}
      render={({ handleSubmit }) => (
        <form id="signin_form" onSubmit={handleSubmit}>
          <Row className={styles.formgroup}>
            <InputField
              name="email"
              placeholder="UserName"
              validate={FieldValidator([email()], 'email address')}
              inputProps={{
                ariaLabel: 'Email Signup',
                className: styles.input,
              }}
              className={styles.formgroupInput}
            />
          </Row>

          <Row className={styles.formgroup}>
            <InputField
              name="password"
              placeholder="Password"
              type="password"
              inputProps={{
                ariaLabel: 'Password',
                name: 'password',
                type: 'password',
                placeholder: 'Password',
                className: styles.input,
              }}
              className= {styles.input}
            />
          </Row>
          <Row justifyContent="space-between" alignItems="center" className={styles.formSubmit}>
            <Button onClick={handleSubmit}>Login</Button>
          </Row>
        </form>
      )}
    />
  );
};
``;

export default SignInForm;
