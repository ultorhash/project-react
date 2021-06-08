import { Component } from 'react';
import { StyledAsideProfileOptions } from './AsideProfileOptionsStyle';
import { AsideProfileOption } from '../aside_profile_option/AsideProfileOption';

import people from '../../../../../media/people.svg';
import userPlus from '../../../../../media/user-plus.svg';
import plus from '../../../../../media/plus.svg';
import publications from '../../../../../media/publications.svg';
import { Link } from 'react-router-dom';

export class AsideProfileOptions extends Component
{
    render()
    {
        return (
            <StyledAsideProfileOptions>
                <Link to="/network" style={{textDecoration: "none"}}><AsideProfileOption imgLeft={people} imgRight={userPlus} title="Your network"/></Link>
                <Link to="/publications" style={{textDecoration: "none"}}><AsideProfileOption imgLeft={publications} imgRight={plus} title="Your publications"/></Link>
            </StyledAsideProfileOptions>
        )
    }
}