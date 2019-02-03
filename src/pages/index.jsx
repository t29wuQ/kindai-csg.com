import React, {Component} from 'react';
import styled from 'styled-components';
import Top from '../components/top';
import Header from '../components/header';
import Access from '../components/access';

const IndexStyle = styled.div`

`;

class Index extends Component{
    render(){
        return(
            <IndexStyle>
                <Header />
                <Top width={window.innerWidth} height={window.innerHeight}/>
                <Access  width={window.innerWidth} height={window.innerHeight}/>
            </IndexStyle>
        );
    }
}

export default Index;