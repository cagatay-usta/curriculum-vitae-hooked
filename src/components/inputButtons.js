import React from "react";

export default function InputButton(props) {
  const { type, category, buttonHandler } = props;
  if (type === "add") {
    return (
      <button
        type="button"
        className="add-button"
        data-category={`add-${category}`}
        onClick={(e) => buttonHandler(e)}
      >
        Add
      </button>
    );
  } else if (type === "delete") {
    return (
      <button
        type="button"
        className="delete-button"
        data-category={`delete-${category}`}
        onClick={(e) => buttonHandler(e)}
      >
        Delete
      </button>
    );
  } else return null;
}
