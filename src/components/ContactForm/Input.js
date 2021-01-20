import React from "react";
import PropTypes from "prop-types";
import nextId from "react-id-generator";

const Input = ({ name, type, label, ...restProps }) => {
  const id = nextId();
  return (
    <div>
          {label && <label htmlFor={id}>{label}</label>}
      <input id={id} type={type} name={name} {...restProps} />
    </div>
  );
};

Input.defaultProps = {
  type: "text",
  label: "",
};

Input.propTypes = {
  type: PropTypes.string,
  name: PropTypes.string.isRequired,
  label: PropTypes.string,
};

export default Input;
