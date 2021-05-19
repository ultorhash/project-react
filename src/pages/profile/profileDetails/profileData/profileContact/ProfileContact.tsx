import { Component } from 'react';
import { StyledProfileContact } from './ProfileContactStyle';

import pencil from '../../../../../media/pencil.png';

export class ProfileContact extends Component<{email: string, phone: string}>
{
    render()
    {
        return (
            <StyledProfileContact>
                <button><img src={pencil} alt="" /></button>
                <p>{this.props.email}</p>
                <p>{this.props.phone}</p>
            </StyledProfileContact>
        )
    }
}