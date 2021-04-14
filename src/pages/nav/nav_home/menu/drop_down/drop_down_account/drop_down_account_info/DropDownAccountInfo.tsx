import { Component } from 'react';
import { StyledDropDownAccountInfo } from './DropDownAccountInfoStyle';

export class DropDownAccountInfo extends Component<{profileImage: string, user: string}>
{
    render()
    {
        return (
            <StyledDropDownAccountInfo>
                <img src={this.props.profileImage} alt="" />
                <p>{this.props.user}</p><br />
                <a href="https://google.com">See profile</a>
            </StyledDropDownAccountInfo>
        )
    }
}