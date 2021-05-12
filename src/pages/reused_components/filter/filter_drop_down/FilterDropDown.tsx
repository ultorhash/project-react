import { Component } from 'react';
import { StyledFilter } from '../filter_style/StyledFilter';
import drop_down from '../../../../media/arrow-down.svg';

export class FilterDropDown extends Component<{title: string}>
{
    render()
    {
        return (
            <StyledFilter>
                <button>
                    <p>{this.props.title}</p>
                    <img src={drop_down} alt="" />                  
                </button>              
            </StyledFilter>
        )
    }
}