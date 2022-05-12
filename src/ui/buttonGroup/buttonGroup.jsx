import Button from "@UI/button/Button";
import Icon from "@UI/icon/Icon";
import { string ,shape} from 'prop-types';
// import PropTypes from 'prop-types';
import styles from './buttonGroup.module.scss';

const ButtonGroup = (props) => {
    const { className, buttonProps, iconProps, ...restProps }=props;
    return (
        <div className={`${styles.wrapper} ${className}`}  {...restProps}>
            <Button className={`${buttonProps?.className} ${styles.wrapperButton}`}>
                {buttonProps?.buttonLabel}
            </Button>
            <Icon iconName={iconProps?.iconName} className={`${iconProps?.className} ${styles.wrapperIcon}`} />
        </div>
    );
};

// Perform Prop Validation
ButtonGroup.propTypes = {
    className: string.isRequired,
    buttonProps: shape({
        buttonLabel:  string.isRequired,
        className:string
    }),
    iconProps: shape({
        iconName: string.isRequired,
        className:string
    })
};


export default ButtonGroup;