import { Component } from 'react';
import { StyledNavOptions } from './NavOptionsStyle';
import { Option } from './option/Option';
import house from '../../../media/house.png';
import comments from '../../../media/comments.png'
import bell from '../../../media/bell.png';

export class NavOptions extends Component
{
    render()
    {
        return (
            <StyledNavOptions>
                <Option img={house}/>
                <Option img={comments}/>
                <Option img={bell}/>
            </StyledNavOptions>
        )
    }
}