import React from 'react';

import IBIBLELogo from '../../images/ibible-logo.png';
import TWOGLogo from '../../images/twog-logo.png';

import { Wrapper, Content, LogoImg, TWOGLogoImg } from './Header.styles';

// component:
const Header = () => (
    <Wrapper>
        <Content>
            <LogoImg src={IBIBLELogo} alt='ibible-logo' />
            <TWOGLogoImg src={TWOGLogo} alt='twog-logo' />
        </Content>
    </Wrapper>
);

export default Header;