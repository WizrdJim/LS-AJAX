import React from 'react';

function Friend(props) {
  return (
    <h1> {props.name} {props.age} {props.email} </h1>
  )
}

export default Friend;