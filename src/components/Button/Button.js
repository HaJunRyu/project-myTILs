import { string, oneOf, node } from 'prop-types';

const Button = ({ type = 'button', className = '', children, ...restProps }) => {
  return (
    <button type={type} className={className} {...restProps}>
      {children}
    </button>
  );
};

Button.propTypes = {
  type: oneOf(['button', 'submit']),
  className: string,
  children: node,
};

export default Button;
