import React, {Component} from 'react';
import styled from 'styled-components';

const Button = styled.div``;

class Button extends Component{
    render(){
        return(
            <div>
                {this.props.link_name}
            </div>
        );
    }
}