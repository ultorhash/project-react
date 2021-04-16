import { Component } from 'react';
import { StyledDropDownAccountInfo } from './DropDownAccountInfoStyle';

export class DropDownAccountInfo extends Component<{profileImage: string, user: string}>
{
    render()
    {
        return (
            <StyledDropDownAccountInfo>
                <img src={this.props.profileImage} alt="" />
                <div>
                    <p>{this.props.user}</p>
                    <a href="https://google.com">See profile</a>
                </div>               
            </StyledDropDownAccountInfo>
        )
    }
}