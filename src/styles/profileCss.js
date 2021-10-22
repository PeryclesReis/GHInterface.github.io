import styled from 'styled-components';

export const Wrapper = styled.div`
  align-items: flex-start;
  display: flex;
`;

export const WrapperImage = styled.img`
  border-radius: 50%;
  display: flex;
  margin: 0 10px;
  width: 200px;
`;

export const WrapperInfoUser = styled.div`
  align-items: flex-start;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 200px;
  margin-left: 8px;
  h1 {
    font-size: 32px;
    font-weight: bold;
  }

  h3 {
    font-size: 18px;
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
    margin-right: 8px;
  }

  a {
    font-size: 16px;
    color: #5b47ff;
    font-weight: bold;
  }
`;
