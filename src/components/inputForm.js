import React, { Component } from "react";
import InputField from "./inputField";
import InputButton from "./inputButtons";

class InputForm extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { personal, work, education, handler, buttonHandler } = this.props;
    return (
      <div id="input-form-container">
        <div id="personal-input-container">
          <h2>Personal Details</h2>
          {Object.keys(personal).map((item, index) => {
            return (
              <div key={index}>
                <InputField
                  placeholder={item}
                  value={personal[item]}
                  onChange={handler}
                  fieldId={`personal-${item}${index}`}
                  category="personal"
                  field={item}
                />
              </div>
            );
          })}
        </div>

        <div id="work-input-container">
          <h2>Work Experience</h2>

          {work.map((listItem, index) => {
            return Object.keys(listItem).map((item, number) => {
              return (
                <div key={number}>
                  <InputField
                    placeholder={item}
                    value={listItem[item]}
                    onChange={handler}
                    category="work"
                    field={item}
                    fieldId={`work-${item}${index}${number}`}
                    position={index}
                  />
                </div>
              );
            });
          })}
          <InputButton
            type="add"
            category="work"
            buttonHandler={buttonHandler}
          />
          {work.length > 1 ? (
            <InputButton
              type="delete"
              category="work"
              buttonHandler={buttonHandler}
            />
          ) : null}
        </div>

        <div id="education-input-container">
          <h2>Education</h2>

          {education.map((listItem, index) => {
            return Object.keys(listItem).map((item, number) => {
              return (
                <div key={number}>
                  <InputField
                    placeholder={item}
                    value={listItem[item]}
                    onChange={handler}
                    category="education"
                    field={item}
                    fieldId={`education-${item}${index}${number}`}
                    position={index}
                  />
                </div>
              );
            });
          })}
          <InputButton
            type="add"
            category="education"
            buttonHandler={buttonHandler}
          />
          {education.length > 1 ? (
            <InputButton
              type="delete"
              category="education"
              buttonHandler={buttonHandler}
            />
          ) : null}
        </div>
      </div>
    );
  }
}

export default InputForm;
