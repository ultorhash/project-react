import { Component } from 'react';
import { StyledDropDownOptions } from './DropDownOptionsStyle';
import { DropDownOption } from '../drop_down_option/DropDownOption';

import house2 from '../../../../../../../media/house2.png';
import publications from '../../../../../../../media/publications.png';
import people from '../../../../../../../media/people.png';
import entities from '../../../../../../../media/entities.png';
import administration from '../../../../../../../media/administration.png';
import entities2 from '../../../../../../../media/entities2.png';

export class DropDownOptions extends Component
{
    render()
    {
        return (
            <StyledDropDownOptions id="drop__down__options">
                <p>Platform</p>
                <DropDownOption imgLeft={house2} title="Home"/>
                <DropDownOption imgLeft={publications} title="Publications"/>
                <DropDownOption imgLeft={people} title="People"/>
                <DropDownOption imgLeft={entities} title="Entities"/>
                <DropDownOption imgLeft={administration} title="Administration"/>
                <p>Workspaces</p>
                <DropDownOption imgLeft={entities2} title="Client contract"/>
                <DropDownOption imgLeft={entities2} title="Supplier contract"/>
                <DropDownOption imgLeft={entities2} title="Corporate"/>
                <DropDownOption imgLeft={entities2} title="Group Norms"/>
                <DropDownOption imgLeft={entities2} title="Real estate contracts"/>
            </StyledDropDownOptions>
        )
    }
}