import React from 'react'

export default function Square(props) {
  return (
    <button className="square" onClick={props.onClick} style={{
      background:
      props.value ? props.value === "X" ? "green" : "yellow" : "white"
      }}>
      {props.value}
    </button>
  );
}
