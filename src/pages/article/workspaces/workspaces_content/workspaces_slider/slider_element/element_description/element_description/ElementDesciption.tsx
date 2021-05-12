import { Component } from 'react';
import { StyledElementDescription } from './ElementDescriptionStyle';
import { ElementInfo } from '../element_info/ElementInfo';
import { ElementUpdate } from '../element_update/ElementUpdate';

export class ElementDescription extends Component<{subtitle: string, users: number}>
{
    render()
    {
        return (
            <StyledElementDescription>
                <ElementInfo text={this.props.subtitle} users={this.props.users}/>
                <ElementUpdate />
            </StyledElementDescription>
        )
    }
}