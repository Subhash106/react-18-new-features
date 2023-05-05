import styled from "styled-components";

const Button = styled.button`
  padding: 1rem 2rem;
  background: ${(props) => (props.primary ? "palevioletred" : "white")};
  color: ${(props) => (props.primary ? "white" : "palevioletred")};
  border: 1px solid ${(props) => (props.primary ? "white" : "palevioletred")};
  font-weight: bold;
  cursor: pointer;
  &:hover {
    background: ${(props) => (props.primary ? "white" : "palevioletred")};
    color: ${(props) => (props.primary ? "palevioletred" : "white")};
    border: 1px solid ${(props) => (props.primary ? "palevioletred" : "white")};
  }
`;

export default Button;
