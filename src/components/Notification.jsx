import { findByLabelText } from "@testing-library/react";
import React from "react";

const style = {
  wrapper: {
    margin: 8,
    padding: 8,
    display: "flex",
    flexDirection: "row",
    border: "1px solid gray",
    borderRadius: 16,
  },
  messageText: {
    color: "black",
    fontSize: 16,
  },
};
export default class Notification extends React.Component {
  render() {
    return (
      <div style={style.wrapper}>
        <span style={style.messageText}>{this.props.message}</span>
      </div>
    );
  }
}
