import { Component } from 'react';
import { StyledElementDescription } from './ElementDescriptionStyle';
import { ElementInfo } from '../element_info/ElementInfo';
import { ElementUpdate } from '../element_update/ElementUpdate';

export class ElementDescription extends Component
{
    render()
    {
        return (
            <StyledElementDescription>
                <ElementInfo />
                <ElementUpdate />
            </StyledElementDescription>
        )
    }
}