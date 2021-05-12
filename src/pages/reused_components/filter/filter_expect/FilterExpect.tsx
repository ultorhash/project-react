import { Component } from 'react';
import { StyledFilter } from '../filter_style/StyledFilter';

import x_sign from '../../../../media/x.png';

export class FilterExpect extends Component<{title: string}>
{
    render()
    {
        return (
            <StyledFilter>
                <button>
                    <img src={x_sign} alt="" />
                    <p>{this.props.title}</p>                   
                </button>  
            </StyledFilter>
        )
    }
}