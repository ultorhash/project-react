import React, { useState } from 'react';
import { StyledDropDownHome } from './MenuStyle';
import { DropDownMenu } from '../drop_down/drop_down/DropDown';
import house from '../../../../../media/house2.png';
import arrow from '../../../../../media/arrow-down.png';

export const DropDownHome: React.FC = () =>
{
    const [isOpen, setIsOpen] = useState(false);
    const toogle = () => setIsOpen(!isOpen);

    return (
        <StyledDropDownHome>
            <img src={house} alt="house2.png"/>
            Home
            <button><img src={arrow} alt="arrow_down.png" onClick={toogle}/></button>
            {isOpen && (
                <DropDownMenu />
            )}
        </StyledDropDownHome>
    )
}