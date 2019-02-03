import React, {Component} from 'react';
import EventListener from 'react-event-listener';
import styled from 'styled-components';

const AccessStyle = styled.div`
    height: ${props => props.height}px;
    position: relative;
`;

const Wrapper = styled.div`
    display: flex;
    flex-wrap: wrap;
    position: absolute;
    top: 50%;
    left: 50%;
    transform : translate(-50%,-50%);
    
`;

const AccessDescription = styled.div`
    width: ${props => props.width}px;
    padding-left: 50px;
    width: 200px;
`;

const Map = styled.div`
    background-image: url(${process.env.PUBLIC_URL+'img/'}/access_bg.png);
    width: ${props => props.width}px;
    height: ${props => props.width}px;
    border-radius: 50%;
`;

class Access extends Component{
    constructor(props){
        super(props);
        this.state={
            width: props.width,
            height: props.height
        }
    }

    render(){
        return(
            <AccessStyle height={this.state.height}>
                <EventListener target="window" onResize={() => {
                    this.setState({width: window.innerWidth});
                    this.setState({height: window.innerHeight});
                }}/>
                <Wrapper flex={
                    (() => {
                        if (this.state.width < 400)
                            return true;
                        else
                            return false;
                    })()
                }>
                    <Map width={
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
                    }>
                    </Map>
                    <AccessDescription width={
                        (() => {
                            if (this.state.width < 400)
                                return this.state.width;
                            else
                                return 400;
                        })()
                    }>
                        <h1>アクセス</h1>
                        近畿大学東大阪キャンパス<br/>
                        22号館D棟204
                    </AccessDescription>
                </Wrapper>
            </AccessStyle>
        );
    }
}

export default Access;