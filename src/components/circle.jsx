import React, {Component} from 'react';
import styled from 'styled-components';

let circle_size = 0;

const CircleStyle = styled.div`
    background-color: rgba(255,255,255,0.25);;
    border-radius: 50%;
    width: ${props => props.width}px;
    height: ${props => props.width}px;
    margin: 0 auto;
    display: table;
`;

const Text = styled.div`
    display: table-cell;
    vertical-align: middle;
    text-align: center;
`;

class Circle extends Component{
    constructor(props){
        super(props);
        circle_size = props.width;
    }

    render(){
        return(
            <CircleStyle width={this.props.width}>
                <Text>
                    size: {this.props.width}
                </Text>
            </CircleStyle>
        );
    }
}

export default Circle;