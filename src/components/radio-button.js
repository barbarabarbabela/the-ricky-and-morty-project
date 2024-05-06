import React from "react";

const RadioButton = ({ name, onChange, value, checked, props, label }) => {
  return (
    <div className="flex items-center">
      <input
        type="radio"
        id={value}
        name={name}
        value={value}
        checked={checked}
        onChange={onChange}
        className="mr-2"
        {...props}
      />
      <label htmlFor={value}>{label}</label>
    </div>
  );
};

export default RadioButton;
