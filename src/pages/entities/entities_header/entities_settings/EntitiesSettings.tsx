import { Component } from 'react';
import { StyledEntitiesSettings } from './EntitiesSettingsStyle';

import setting from '../../../../media/cog.svg'; 

export class EntitiesSettings extends Component
{
    render()
    {
        return (
            <StyledEntitiesSettings>
                <h1>Entities</h1>
                <a href="https://www.google.com"><img src={setting} alt="" /></a>
            </StyledEntitiesSettings>
        )
    }
}