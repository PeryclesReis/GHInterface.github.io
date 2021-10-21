import React from 'react';
import * as S from '../../styles/LayoutCss';
import Header from '../header';

const Layout = ({ children }) => {
  return (
    <S.WrapperLayout>
      <Header />
      { children }
    </S.WrapperLayout>
  );
}

export default Layout;
