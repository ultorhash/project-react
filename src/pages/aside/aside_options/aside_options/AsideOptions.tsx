import { Component } from 'react';
import { StyledAsideOptions } from './AsideOptionsStyle';
import { AsideOption } from '../aside_option/AsideOption';

import publications from '../../../../media/publications.png';
import ecosystem from '../../../../media/ecosystem.png';
import entities from '../../../../media/entities2.png';

import { Link, BrowserRouter as Router } from 'react-router-dom';

export class AsideOptions extends Component
{
    render()
    {
        return (
            <StyledAsideOptions>
                <Link to="/publications" style={{textDecoration: "none"}}>
                    <AsideOption imgLeft={publications} title="Publications" />
                </Link>
                <Link to="/ecosystem" style={{textDecoration: "none"}}>
                    <AsideOption imgLeft={ecosystem} title="Ecosystem"/>
                </Link>
                <Link to="/entities" style={{textDecoration: "none"}}>
                    <AsideOption imgLeft={entities} title="Entities"/>
                </Link>
            </StyledAsideOptions>
        )
    }
}