import React, {Component} from 'react';
import styled from 'styled-components';


const CircleStyle = styled.div`
    background-color: rgba(255,255,255,0.25);;
    border-radius: 50%;
    width: ${props => props.width}px;
    height: ${props => props.width}px;
    display: table;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    margin: auto;

`;

const Text = styled.div`
    display: table-cell;
    vertical-align: middle;
    text-align: center;
`;

class Circle extends Component{
    constructor(props){
        super(props);
    }

    render(){
        return(
            <CircleStyle width={this.props.width}>
                <Text>
                    <h1>kindai-csg</h1>
                    近畿大学電子計算機研究会
                </Text>
            </CircleStyle>
        );
    }
}

export default Circle;