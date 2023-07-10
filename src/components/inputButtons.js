import React, { Component } from "react";

// add and delete buttons
// adds a new item to category list with keys with empty values

// get category, copy the keys, add new item with those keys

export default class InputButton extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { type, category, buttonHandler } = this.props;
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
}
