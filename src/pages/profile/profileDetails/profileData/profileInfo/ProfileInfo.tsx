import { Component } from 'react';
import { StyledProfileInfo } from './ProfileInfoStyle';

export class ProfileInfo extends Component<{name: string, boss: string, city: string, employeeType: string}>
{
    render()
    {
        return (
            <StyledProfileInfo>
                <h2>{this.props.name}</h2>
                <h2>{this.props.boss}</h2>
                <p>{this.props.city}</p>
                <p>{this.props.employeeType}</p>
            </StyledProfileInfo>
        )
    }
}