import { Component } from 'react';
import { StyledDropDownOptions } from './DropDownOptionsStyle';
import { DropDownOption } from '../drop_down_option/DropDownOption';
import { Link } from 'react-router-dom';

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
                <Link to="/" style={{textDecoration: "none"}}><DropDownOption imgLeft={house2} title="Home"/></Link>
                <Link to="/publications" style={{textDecoration: "none"}}><DropDownOption imgLeft={publications} title="Publications"/></Link>
                <Link to="/people" style={{textDecoration: "none"}}><DropDownOption imgLeft={people} title="People"/></Link>
                <Link to="/entities" style={{textDecoration: "none"}}><DropDownOption imgLeft={entities} title="Entities"/></Link>
                <Link to="/entities" style={{textDecoration: "none"}}><DropDownOption imgLeft={administration} title="Administration"/></Link>
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