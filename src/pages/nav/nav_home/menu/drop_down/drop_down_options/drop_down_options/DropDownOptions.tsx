import { Component } from 'react';
import { StyledDropDownOptions } from './DropDownOptionsStyle';
import { DropDownOption } from '../drop_down_option/DropDownOption';
import { Link } from 'react-router-dom';

import house2 from '../../../../../../../media/house2.svg';
import publications from '../../../../../../../media/publications.svg';
import people from '../../../../../../../media/people.svg';
import entities from '../../../../../../../media/entities.svg';
import administration from '../../../../../../../media/administration.svg';

import user_plus from '../../../../../../../media/network.svg';
import ecosystem from '../../../../../../../media/ecosystem.svg';

export class DropDownOptions extends Component
{
    render()
    {
        return (
            <StyledDropDownOptions id="drop-down-options">
                <p>Platform</p>
                <Link to="/" style={{textDecoration: "none"}}><DropDownOption imgLeft={house2} title="Home"/></Link>
                <Link to="/publications" style={{textDecoration: "none"}}><DropDownOption imgLeft={publications} title="Publications"/></Link>
                <Link to="/people" style={{textDecoration: "none"}}><DropDownOption imgLeft={people} title="People"/></Link>
                <Link to="/entities" style={{textDecoration: "none"}}><DropDownOption imgLeft={entities} title="Entities"/></Link>
                <Link to="/entities" style={{textDecoration: "none"}}><DropDownOption imgLeft={administration} title="Administration"/></Link>
                <p>Workspaces</p>
                <Link to={{pathname: "/workspace", state: {title: "Client contract", img: ecosystem}}}
                style={{textDecoration: "none"}}><DropDownOption imgLeft={ecosystem} title="Client contract"/></Link>
                <Link to={{pathname: "/workspace", state: {title: "Supplier contract", img: entities}}}
                style={{textDecoration: "none"}}><DropDownOption imgLeft={entities} title="Supplier contract"/></Link>
                <Link to={{pathname: "/workspace", state: {title: "Corporate", img: people}}}
                style={{textDecoration: "none"}}><DropDownOption imgLeft={people} title="Corporate"/></Link>
                <Link to={{pathname: "/workspace", state: {title: "Group Norms", img: publications}}}
                style={{textDecoration: "none"}}><DropDownOption imgLeft={publications} title="Group Norms"/></Link>
                <Link to={{pathname: "/workspace", state: {title: "Real estate contracts", img: user_plus}}}
                style={{textDecoration: "none"}}><DropDownOption imgLeft={user_plus} title="Real estate contracts"/></Link>
            </StyledDropDownOptions>
        )
    }
}