import { Component } from 'react';
import { StyledSettings } from './SettingsStyle';

import settings from '../../../../../../../media/cog.svg';

export class Settings extends Component
{
    render()
    {
        return (
            <StyledSettings>
                <button><img src={settings} alt="" /></button>
            </StyledSettings>
        )
    }
}