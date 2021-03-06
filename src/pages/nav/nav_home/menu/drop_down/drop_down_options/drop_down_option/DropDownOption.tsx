import { Component } from 'react';
import { StyledDropDownOption } from './DropDownOptionStyle'; 

export class DropDownOption extends Component<{imgLeft: string, title: string}>
{
    render()
    {
        return (
            <StyledDropDownOption className="nav-option">
                <img src={this.props.imgLeft} alt="" />
                <p>{this.props.title}</p>
            </StyledDropDownOption>
        )
    }
}