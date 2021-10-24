import styled from 'styled-components';

export const Wrapper = styled.div`
  border: 1px solid #bfbdbd;
  border-radius: 8px;
  height: 150px;
  padding: 8px;
  margin: 15px 15px;
  width: 400px;

  &:hover {
    border-radius: 5px;
    box-shadow: 2px 4px 15px 1px gray;
    font-size: 19px;
  }
`;

export const WrapperTitle = styled.h2`
  align-items: baseline;
  color: #5b47ff;
  display: flex;
  font-size: 18px;
  font-weight: bold;
  justify-content: space-between;
  margin: 10px 0 5px 0;
  padding: 5px 0;

  span {
    border: 1px solid #bfbdbd;
    border-radius: 10px;
    color: gray;
    font-size: 12px;
    padding: 4px 6px;
  }
`;

export const WrapperFullName = styled.h4`
  display:flex;
  flex-direction: column;
  font-size: 16px;
  margin-top: 15px;

  span {
    color: #2d3748;
    flex-direction: column;
    font-size: 16px;
    margin: 5px 0;
  }
`;