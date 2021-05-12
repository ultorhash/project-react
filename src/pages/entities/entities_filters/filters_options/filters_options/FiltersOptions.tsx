import { Component } from 'react';
import { StyledFiltersOptions } from './FiltersOptionsStyle';
import { FilterOption } from '../filter_option/FilterOption';

import plus from '../../../../../media/plus.svg';
import drop_down from '../../../../../media/arrow-down.svg';

export class FiltersOptions extends Component
{
    render()
    {
        return (
            <StyledFiltersOptions>
                <FilterOption img={plus} title="Add filter" imgLeftSide={true}/>
                <FilterOption img={drop_down} title="Choose property" imgLeftSide={false}/>
            </StyledFiltersOptions>
        )
    }
}