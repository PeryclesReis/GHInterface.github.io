import React from 'react';
import * as S from '../../styles/RepositoriesItem';

const RepositoryItem = ({ name, linkToRepo, fullName, language, updatedAt, visibility }) => {
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
              { visibility }
            </span>
        </S.WrapperTitle>
        <S.WrapperFullName>
          <span>
            { fullName }
          </span>
        </S.WrapperFullName>
        <S.WrapperLanguage>
          <p>
            { language }
          </p>
          <p>
            Updated on
            { updatedAt }
          </p>
        </S.WrapperLanguage>
      </ S.Wrapper>
    </a>
  );
}

export default RepositoryItem;
