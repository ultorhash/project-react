import { Component } from 'react';
import { StyledAsideOptions } from './AsideOptionsStyle';
import { AsideOption } from '../aside_option/AsideOption';

import publications from '../../../../media/publications.png';
import ecosystem from '../../../../media/ecosystem.png';
import entities from '../../../../media/entities2.png';

export class AsideOptions extends Component
{
    render()
    {
        return (
            <StyledAsideOptions>
                <AsideOption imgLeft={publications} title="Publications"/>
                <AsideOption imgLeft={ecosystem} title="Ecosystem"/>
                <AsideOption imgLeft={entities} title="Entities"/>
            </StyledAsideOptions>
        )
    }
}