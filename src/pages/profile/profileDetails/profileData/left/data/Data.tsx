import { Component } from 'react';
import { StyledData } from './DataStyle';
import { IPersonData } from '../../IPersonData';

export class Data extends Component<{personData: IPersonData}>
{
    render()
    {
        return (
            <StyledData>
                <p>{this.props.personData.name}</p>
                <p>{this.props.personData.userName}</p>
                <p>{this.props.personData.city}</p>
                <p>{this.props.personData.position}</p>
            </StyledData>
        )
    }
}