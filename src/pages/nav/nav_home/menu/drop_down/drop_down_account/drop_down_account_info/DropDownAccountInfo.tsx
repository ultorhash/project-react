import { Component } from 'react';
import { StyledDropDownAccountInfo } from './DropDownAccountInfoStyle';
import { Link } from 'react-router-dom';

export class DropDownAccountInfo extends Component<{profileImage: string, user: string}>
{
    render()
    {
        return (
            <StyledDropDownAccountInfo>
                <img src={this.props.profileImage} alt="" />
                <div>
                    <p>{this.props.user}</p>
                    <Link to="/profile" style={{textDecoration: "none", backgroundColor: "transparent", color: "#4169E1"}}>See profile</Link>
                </div>               
            </StyledDropDownAccountInfo>
        )
    }
}