import React, { Component } from "react";
import styled from "styled-components";

interface ButtonType {
  danger?: {};
}

/* const Button = ({ danger }: ButtonType) => {
  return (
    <button
      className={danger ? "button button-danger" : "button button-success"}
    >
      Hello
    </button>
  );
};
 */
class App extends Component {
  render() {
    return (
      <Container>
        <Button>Good job</Button>
        <Button danger>There is gonna be danger</Button>
      </Container>
    );
  }
}

const Container = styled.div`
  height: 100vh;
  width: 100%;
  background-color: pink;
`;

//styled.button`` = create "button" element with style inside ``
//& = it is like, if the component has class nmae "E", &active means ".E:active" in CSS
//all components in react has props naturally. I can utilize it.
const Button = styled.button`
  border-radius: 10px;
  padding: 10px;
  margin: 10px;
  min-width: 120px;
  color: white;
  font-weight: 600;
  -webkit-appearance: none;
  cursor: pointer;
  border: none;
  &active,
  &focus {
    outline: none;
  }
  background-color: ${({ danger }: ButtonType) =>
    danger ? "#e74c3c" : "#2ecc71"};
`;

export default App;
