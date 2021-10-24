import React from 'react';
import * as S from '../../styles/RepositoriesItemCss';

const RepositoryItem = ({ name, linkToRepo, fullName, typeRepo }) => {
  return (
    <a
      href={ linkToRepo }
      target='_blank'
      rel="noreferrer"
    >
      <S.Wrapper>
        <S.WrapperTitle>
            { name }
            <span>
              { typeRepo }
            </span>
        </S.WrapperTitle>
        <S.WrapperFullName>
          Full name:
          <span>
            { fullName }
          </span>
        </S.WrapperFullName>
      </ S.Wrapper>
    </a>
  );
}

export default RepositoryItem;
