import React from "react";

function InputField(props) {
  const { placeholder, value, onChange, fieldId, category, field, position } =
    props;
  return (
    <>
      <input
        type="text"
        placeholder={placeholder}
        value={value}
        onChange={(e) => onChange(e)}
        id={fieldId}
        data-category={category}
        data-field={field}
        data-position={position}
      ></input>
    </>
  );
}

export default InputField;
