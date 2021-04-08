import { Component } from 'react';
import { StyledDropDownLogout } from './DropDownLogoutStyle';

export class DropDownLogout extends Component<{imgLeft: string}>
{
    render()
    {
        return (
            <StyledDropDownLogout href="https://www.google.pl">
                <img src={this.props.imgLeft} alt="" />
                <p>Logout</p>
            </StyledDropDownLogout>
        )
    }
}