import React, { useState } from 'react';
import { StyledMenu } from './MenuStyle';
import { DropDownMenu } from '../drop_down/drop_down/DropDown';
import house from '../../../../../media/house2.png';
import arrow from '../../../../../media/arrow-down.png';

export const DropDownHome: React.FC = () =>
{
    const [isOpen, setIsOpen] = useState(false);
    const toogle = () => setIsOpen(!isOpen);

    return (
        <StyledMenu>
            <img src={house} alt="house2.png" />
            <p>Home</p>
            <button onClick={toogle}><img src={arrow} alt="" /></button>
            {isOpen && (
                <DropDownMenu />
            )}
        </StyledMenu>
    )
}