import { Component } from 'react';
import { StyledDropDownAccount } from './DropDownAccountStyle';
import { DropDownAccountInfo } from './drop_down_account_info/DropDownAccountInfo';
import { DropDownAccountOption } from './drop_down_account_option/DropDownAccountOption';

import profileImage from '../../../../../../media/profile-photo.png';
import privacy from '../../../../../../media/privacy.png';
import settings from '../../../../../../media/settings.png';

export class DropDownAccount extends Component
{
    render()
    {
        return (
            <StyledDropDownAccount>
                <p>Account</p>
                <DropDownAccountInfo profileImage={profileImage} user="Jeanne-Marie de la crem"/>
                <DropDownAccountOption imgLeft={privacy} title="Privacy"/>
                <DropDownAccountOption imgLeft={settings} title="Settings"/>
            </StyledDropDownAccount>
        )
    }
}