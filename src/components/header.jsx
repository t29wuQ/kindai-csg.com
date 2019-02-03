import React, {Component} from 'react';
import styled from 'styled-components';

const HeaderStyle = styled.div`
    height: 40px;
    position: fixed;
    top:0;
    width:100%;
    z-index:114514;
    text-align: right;
`;

const LinkBox = styled.div`
    display: flex;
`;

class Header extends Component{
    render(){
        return(
            <HeaderStyle>
                aaaaaaaaaa
            </HeaderStyle>
        );
    }
}

export default Header;