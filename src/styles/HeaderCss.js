import styled from "styled-components";

export const Wrapper = styled.div`
  color: white;
  display: flex;
  justify-content: center;
  margin: 15px 0;
  padding-top: 25px;
  width: 100%;

  input {
    border: 1px solid #353A58;
    border-radius: 6px 0 0 6px;
    margin-right: 2px;
    padding: 10px;
    width: 40%;

    &:focus {
      outline: none;
    }
  }

  button {
    border: 1px solid #9999;
    background-color: #00a8ff;
    box-shadow: 0 0 0.5em rgba(0, 0, 0, 0.1);
    border-radius: 0 6px 6px 0;
    color: #ffff;
    font-weight: bold;
    padding: 0 20px;

    &:hover {
      background-color: #40739e;
      box-shadow: 0 0 0.5em rgba(0, 0, 0, 0.6);
    }
  }
`;
