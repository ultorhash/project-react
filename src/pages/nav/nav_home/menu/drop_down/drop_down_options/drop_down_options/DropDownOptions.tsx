import { Component } from 'react';
import { StyledDropDownOptions } from './DropDownOptionsStyle';
import { DropDownOption } from '../drop_down_option/DropDownOption';

import house2 from '../../../../../../../media/house2.png';

export class DropDownOptions extends Component
{
    render()
    {
        return (
            <StyledDropDownOptions>
                <DropDownOption imgLeft={house2} title="Option 1"/>
                <DropDownOption imgLeft={house2} title="Option 2"/>
                <DropDownOption imgLeft={house2} title="Option 3"/>
            </StyledDropDownOptions>
        )
    }
}