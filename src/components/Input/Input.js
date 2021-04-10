import { string } from 'prop-types';

const Input = ({ id, label, placeholder, type, ...restProps }) => {
  return (
    <div>
      <label htmlFor={id}>{label}</label>
      <input id={id} type={type} placeholder={placeholder} {...restProps} />
    </div>
  );
};

Input.propTypes = {
  id: string,
  label: string,
  placeholder: string,
};

export default Input;
