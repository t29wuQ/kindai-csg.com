import React, {Component} from 'react';
import styled from 'styled-components';
import Top from '../components/top';

const IndexStyle = styled.div`

`;

class Index extends Component{
    render(){
        return(
            <IndexStyle>
                <Top width={window.innerWidth} height={window.innerHeight}/>
            </IndexStyle>
        );
    }
}

export default Index;