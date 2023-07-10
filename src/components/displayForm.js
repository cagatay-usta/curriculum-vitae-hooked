import React from "react";

function DisplayForm(props) {
  const { personal, work, education } = props;
  return (
    <div id="display-form-container">
      <div id="personal-display-container">
        {Object.values(personal).map((item, index) => {
          return <div key={index}>{item}</div>;
        })}
      </div>

      <div id="work-display-container">
        {work.map((listItem, index) => {
          return Object.values(listItem).map((item, number) => {
            return <div key={number}>{item}</div>;
          });
        })}
      </div>

      <div id="education-display-container">
        {education.map((listItem, index) => {
          return Object.values(listItem).map((item, number) => {
            return <div key={number}>{item}</div>;
          });
        })}
      </div>
    </div>
  );
}

export default DisplayForm;
