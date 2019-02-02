import React, {Component} from 'react';
import EventListener from 'react-event-listener';
import styled from 'styled-components';
import Circle from './circle'

const TopStyle = styled.div`
    background-color: yellow;
`;

class Top extends Component{
    constructor(props){
        super(props);
        this.state={
            width: 0
        }
    }
    render(){
        return(
            <TopStyle>
                <EventListener target="window" onResize={() => this.setState({width: window.innerWidth})}/>
                {this.state.width}
                <Circle width={
                    (() => {
                    if (this.state.width < 600)
                        return this.state.width * 0.5;
                    else
                        return 400;
                })()
                }/>
            </TopStyle>
        );
    }
}

export default Top;