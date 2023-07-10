import React, { Component } from "react";

class InputField extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { placeholder, value, onChange, fieldId, category, field, position } =
      this.props;
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
}

export default InputField;
