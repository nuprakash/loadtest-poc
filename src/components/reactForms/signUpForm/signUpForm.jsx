/*
 * File: SignInForm.jsx
 * Project: webapp-rrs
 * Created Date: Monday, July 12th 2021, 3:12:27 am
 * Author: Jebarin <jebarin.johnrose@nutechnologyinc.com>
 * -----
 * Last Modified: Wednesday October 20th 2021 8:22:49 pm
 * Modified By: Jebarin <jebarin.johnrose@nutechnologyinc.com>
 * -----
 * Copyright (c) 2021 All rights reserved
 * ------------------------------------
 */
import InputField from '@Components/reactForms/formFields/inputField/InputField';
import { Form } from 'react-final-form';
import FieldValidator, { email } from '../helpers/FieldValidator';
import { Row } from '@UI/layout';
import styles from './signUpForm.module.scss'

import ButtonGroup from '@UI/buttonGroup/buttonGroup';

/**
 * SignUpForm Component
 * @returns {*}
 * @constructor
 */
const SignUpForm = () => {

    const onSubmit = async (values) => {
        console.log("submitted", values)
    };

    return (
        <Form
            onSubmit={onSubmit}
            render={({ handleSubmit, submitting, values }) => (
                <form id="signin_form" onSubmit={handleSubmit}>
                    <Row className={styles.formgroup} >
                        <InputField
                            name="email"
                            placeholder="E-mail or Phone"
                            validate={FieldValidator([email()], 'email address')}
                            inputProps={{
                                ariaLabel: 'Email Signup',
                                className: styles.formgroupInputField
                            }}
                            className={styles.formgroupInput}
                        />

                    </Row>

                    <Row className={styles.formgroup} >
                        <InputField
                            name="password"
                            isInputGroup
                            placeholder="Password"
                            inputProps={{
                                ariaLabel: 'Password',
                                name: "password",
                                placeholder: 'Password',
                                className: styles.formgroupInputField
                            }}
                            iconProps={{
                                iconName: 'lock'
                            }}
                            inputGroupClassName={styles.formgroupInputField}
                            className={styles.formgroupInput}
                        />

                    </Row>
                    <Row justifyContent='space-between' alignItems='center' className={styles.formSubmit}>
                        <ButtonGroup
                            onClick={handleSubmit}
                            buttonProps={{
                                buttonLabel: 'Register'
                            }}
                            iconProps={{
                                iconName: 'arrow'
                            }}
                        />
                    </Row>

                </form>
            )}
        />
    );
};


export default SignUpForm;
