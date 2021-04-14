import { Component } from 'react';
import { StyledDropDownAccountOption } from './DropDownAccountOptionStyle';

export class DropDownAccountOption extends Component<{imgLeft: string, title: string}>
{
    render()
    {
        return (
            <StyledDropDownAccountOption href="https://google.com">
                <img src={this.props.imgLeft} alt="" />
                <p>{this.props.title}</p>
            </StyledDropDownAccountOption>
        )
    }
}