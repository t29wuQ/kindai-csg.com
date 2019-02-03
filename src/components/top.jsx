import React, {Component} from 'react';
import EventListener from 'react-event-listener';
import styled from 'styled-components';
import Circle from './circle';

const TopStyle = styled.div`
    background-color: yellow;
    height: ${props => props.height}px;
    width: 100%;
`;

class Top extends Component{
    constructor(props){
        super(props);
        this.state={
            width: props.width,
            height: props.height
        }
    }
    render(){
        return(
            <TopStyle height={this.state.height}>
                <EventListener target="window" onResize={() => {
                    this.setState({width: window.innerWidth});
                    this.setState({height: window.innerHeight});
                }}/>
                <Circle width={
                    (() => {
                        if (this.state.width < 400 || this.state.height < 400){
                            if (this.state.width > this.state.height)
                                return this.state.height;
                            else
                                return this.state.width;
                        }
                        else
                            return 400;
                })()
                }/>
            </TopStyle>
        );
    }
}

export default Top;