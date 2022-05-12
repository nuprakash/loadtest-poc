import Input from '@UI/input/Input';
import { Form } from 'react-final-form';
import LinkTag from '@Components/linkTag/LinkTag';
import ButtonGroup from '@UI/buttonGroup/buttonGroup';
import { Row, Col } from '@UI/layout';
import FieldValidator, { email } from '../helpers/FieldValidator';
import styles from './otpForm.module.scss';
import Typography from '@UI/typography/Typography';

/**
 * OtpForm Component
 * @returns {*}
 * @constructor
 */
const OtpForm = () => {

    const onSubmit = async (values) => {
        console.log("submitted", values)
    };

    return (
        <Form
            onSubmit={onSubmit}
            render={({ handleSubmit, submitting }) => (
                <form id="signin_form" onSubmit={handleSubmit}>
                    <Row className={styles.formgroup} columnGap={25} rowGap={15}>
                        <Row>
                            <Typography variant="p"> We have sent OTP to entered email address, Enter the OTP received.</Typography>
                        </Row>
                        <Col >
                            <Input />
                        </Col>
                        <Col >
                            <Input />
                        </Col>
                        <Col >
                            <Input />
                        </Col>
                        <Col >
                            <Input />
                        </Col>
                    </Row>

                    <Row rowGap={15} flexDirection='column' className={styles.formSubmit}>
                        <Row justifyContent='flex-end'>
                            <LinkTag href='/' >Resend OTP</LinkTag>
                        </Row>
                        <Row justifyContent='flex-end'>
                            <LinkTag href='/'>Change Email address</LinkTag>
                        </Row>
                    </Row>

                </form>
            )}
        />
    );
};
``

export default OtpForm;
