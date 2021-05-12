import { Component } from 'react';
import { StyledEntitiesFilters } from './EntitiesFiltersStyle';
import { FilterRow } from '../filter_row/FilterRow';
import { FiltersOptions } from '../filters_options/filters_options/FiltersOptions';

export class EntitiesFilters extends Component
{
    render()
    {
        return (
            <StyledEntitiesFilters>
                <p>Rows are filtered by the following conditions starting from the top.</p>
                <FilterRow titles={["Where", "Company", "Contains"]} firstSearchHint="Type..." hasBetweenSearch={false}/>
                <FilterRow titles={["Where", "Status", "Is"]} firstSearchHint="Type..." hasBetweenSearch={true}/>
                <FilterRow titles={["And", "Status", "Ends before"]} firstSearchHint="Date..." hasBetweenSearch={true}/>
                <FiltersOptions />
            </StyledEntitiesFilters>
        )
    }
}