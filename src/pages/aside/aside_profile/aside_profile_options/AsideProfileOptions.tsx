import { Component } from 'react';
import { StyledAsideProfileOptions } from './AsideProfileOptionsStyle';
import { AsideProfileOption } from './aside_profile_option/AsideProfileOption';

import people from '../../../../media/people.png';
import userPlus from '../../../../media/user-plus.png';
import plus from '../../../../media/plus.png';
import publications from '../../../../media/publications.png';

export class AsideProfileOptions extends Component
{
    render()
    {
        return (
            <StyledAsideProfileOptions>
                <AsideProfileOption imgLeft={people} imgRight={userPlus} title="Your network"/>
                <AsideProfileOption imgLeft={publications} imgRight={plus} title="Your publications"/>
            </StyledAsideProfileOptions>
        )
    }
}