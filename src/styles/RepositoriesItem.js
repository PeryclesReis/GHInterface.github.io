import styled from 'styled-components';

export const Wrapper = styled.div`
  border-bottom: 1px solid #3b4043;
  border-top: 1px solid #3b4043;
  border-radius: 8px;
  height: 150px;
  padding: 8px;
  margin: 15px 15px;
  width: 400px;

  &:hover {
    border-radius: 8px;
    box-shadow: 4px 4px 1px #316dca;
  }
`;

export const WrapperTitle = styled.h2`
  color: #316dca;
  display: flex;
  font-size: 20px;
  font-weight: 900;
  justify-content: space-between;
  margin: 10px 0 5px 0;
  padding: 5px 0;

  span {
    border: 1px solid;
    border-radius: 8px;
    color: #797979;
    font-size: 16px;
    font-weight: 300;
    text-align: center;
    width: 15%;
  }
`;

export const WrapperLanguage = styled.h3`
  color: #316dca;
  display: flex;
  font-size: 15px;
  font-weight: 400;
  justify-content: space-between;
  margin: 8px 0;
  width: 100%;
`;

export const WrapperFullName = styled.h4`
  display:flex;
  color: #787f86;
  flex-direction: column;
  font-size: 18px;
  font-weight: 400;
  margin-top: 15px;

  span {
    flex-direction: column;
    font-size: 18px;
    margin: 5px 0;
  }
`;