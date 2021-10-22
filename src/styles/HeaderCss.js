import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  margin: 10px 0;
  width: 1900px;

  input {
    border: 1px solid #9999;
    box-shadow: 0 0 0.5em rgba(0, 0, 0, 0.1);
    border-radius: 6px 0 0 6px;
    margin-right: 2px;
    padding: 10px;
    width: 40%;

    &:focus {
      box-shadow: 0 0 0.5em rgba(0, 0, 0, 0.6);
      outline: none;
    }
  }

  button {
    border: 1px solid #9999;
    background-color: #7564ff;
    box-shadow: 0 0 0.5em rgba(0, 0, 0, 0.1);
    border-radius: 0 6px 6px 0;
    color: #ffff;
    font-weight: bold;
    padding: 0 20px;

    &:hover {
      background-color: #8576ff;
      box-shadow: 0 0 0.5em rgba(0, 0, 0, 0.6);
    }
  }
`;
