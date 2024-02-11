import styled from 'styled-components';

export const Wrapper = styled.div`
  align-items: center;
  display: flex;
  margin: 20px 0;
  padding: 10px;
`;

export const WrapperImage = styled.img`
  border: 1px solid #787f86;
  border-radius: 50%;
  display: flex;
  margin: 0 10px;
  width: 300px;
`;

export const WrapperInfoUser = styled.div`
  align-items: flex-start;
  color: #D0D0D0;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 200px;
  margin-left: 8px;
  h1 {
    font-size: 32px;
    font-weight: bold;
  }

  h4 {
    font-size: 16px;
    font-weight: bold;
  }
`;

export const WrapperStatusCount = styled.div`
  align-items: center;
  display: flex;
  div {
    margin: 10px 10px 0 0;
    text-align: center;
  }
`;

export const WrapperUserName= styled.div`
  align-items: center;
  display: flex;
  margin-top: 10px;
  h3 {
    font-size: 18px;
    font-weight: bold;
    margin-right: 6px;
  }

  a {
    font-size: 16px;
    color: #797979;
    font-weight: bold;
  }
`;
